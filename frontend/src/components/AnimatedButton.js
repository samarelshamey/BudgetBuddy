import { motion } from 'framer-motion';

const CustomButton = ({ onClick, loading, text }) => (
    <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
        padding: '10px 20px',
        backgroundColor: '#4CAF50',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        }}
        onClick={onClick}
        disabled={loading}
    >
        {loading ? 'Loading...' : text}
    </motion.button>
);

export default CustomButton;
