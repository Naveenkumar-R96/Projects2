import { prevUser } from "./contents/UserContext";


const apiKey = import.meta.env.VITE_ANOTHER_KEY;

export async function query() {
	try {
	  const response = await fetch(
		"https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev", // Use the correct model URL
		{
		  method: "POST",
		  headers: {
			Authorization: `Bearer ${apiKey}`,
			"Content-Type": "application/json",
			Accept: "image/png",
		  },
		  body: JSON.stringify({ inputs: prevUser.prompt }), // Use the prompt from prevUser
		}
	  );
  
	  if (!response.ok) {
		const errorText = await response.text();
		throw new Error(`HTTP error! Status: ${response.status} - ${errorText}`);
	  }
  
	  const result = await response.blob();
	  return result;
	} catch (error) {
	  console.error("Error occurred during image generation:", error);
	  throw error;  // Re-throwing the error for further handling if needed
	}
  }