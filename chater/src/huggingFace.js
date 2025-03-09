import { prevUser } from "./contents/UserContext";


const apiKey = import.meta.env.VITE_ANOTHER_KEY;
export async function query() {
	const response = await fetch(
		"https://router.huggingface.co/hf-inference/models/ZB-Tech/Text-to-Image",
		{
			headers: {
				Authorization: `Bearer ${apiKey}`,
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify({"inputs":prevUser.prompt}),
		}
	);
	const result = await response.blob();
	return result;
}
