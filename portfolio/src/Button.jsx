import { useNavigate } from "react-router-dom";
    import { motion } from "framer-motion";

    const FixedButton = () => {
        const navigate = useNavigate();

        const handleNavigate = () => {
            navigate("/"); // Navigate to the home page
        };

        return (
            <motion.button
            onClick={handleNavigate}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
                position: "fixed",
                bottom: "20px",
                right: "20px",
                padding: "10px 20px",
                backgroundColor: "#007BFF",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
            >
            Home
            </motion.button>
        );
    };

    export default FixedButton;
   