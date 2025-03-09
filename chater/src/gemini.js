import { prevUser } from "./contents/UserContext";

const apiKey = import.meta.env.VITE_API_KEY;
const Api_Url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

export const generateResponse = async () => {

    let RequestOption = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "contents": [{
                "parts": [
                    { "text": prevUser.prompt },
                    prevUser.data ? {
                        "inline_data": {
                            "mime_type": prevUser.mime_type,
                            "data": prevUser.data
                        }
                    } : null,
                ].filter(part => part !== null) 
            }]
        })
    };

    try {
        const response = await fetch(Api_Url, RequestOption);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        let apiResponse = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();
        console.log(apiResponse);
        return apiResponse;
    } catch (error) {
        console.error("Error generating response:", error);
        throw error; 
    }
};
