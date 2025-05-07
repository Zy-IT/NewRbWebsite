import Api from "../Api/Api";

export const PostApplication = async () => {
    try {
        const response = await Api.post("/LoanApplication/Apply");
        return response.data;
    } catch (error) {
        throw error.response.data || new Error("Error Posting Application")
    }
}