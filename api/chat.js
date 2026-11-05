export default async function handler(req, res) {

  try {

    const question = req.body?.question || "";

    const API_KEY = process.env.GEMINI_API_KEY;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: question
            }]
          }]
        })
      }
    );

    const data = await response.json();

    return res.status(200).json(data);

  } catch(error) {

    return res.status(500).json({
      error: error.message
    });

  }

}
