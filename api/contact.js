// /api/contact.js
// Ontvangt de inzendingen van het contactformulier (The Stadium Experience)
// en stuurt ze door naar een Zapier "Catch Hook" webhook.
//
// Vereist in Vercel (Project Settings > Environment Variables):
//   ZAPIER_WEBHOOK_URL = https://hooks.zapier.com/hooks/catch/xxxxxxx/xxxxxxx/

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const body = req.body || {};

  // Honeypot: als dit veld ingevuld is, is het een bot -> stil "succes" teruggeven.
  if (body['bot-field']) {
    return res.status(200).json({ ok: true });
  }

  const { voornaam, naam, email, telefoonnummer, sportclub, extra_info } = body;

  if (!voornaam || !naam || !email) {
    return res.status(400).json({ ok: false, error: 'Verplichte velden ontbreken' });
  }

  const webhookUrl = process.env.ZAPIER_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error('ZAPIER_WEBHOOK_URL ontbreekt in de environment variables');
    return res.status(500).json({ ok: false, error: 'Server misconfigured' });
  }

  try {
    const zapierRes = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        voornaam,
        naam,
        email,
        telefoonnummer: telefoonnummer || '',
        sportclub: sportclub || '',
        extra_info: extra_info || '',
        bron: 'The Stadium Experience website',
        submitted_at: new Date().toISOString(),
      }),
    });

    if (!zapierRes.ok) {
      throw new Error(`Zapier webhook antwoordde met status ${zapierRes.status}`);
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Doorsturen naar Zapier mislukt:', err);
    return res.status(502).json({ ok: false, error: 'Kon niet doorsturen naar Zapier' });
  }
}
