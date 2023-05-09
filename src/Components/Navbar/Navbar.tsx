import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import ContentCutIcon from "@mui/icons-material/ContentCut";

const Navbar = () => {
  return (
    <motion.div className="fixed top-0 h-10 w-screen bg-stone-900 z-50 inline-flex justify-between bg-opacity-70">
      {/* <img alt="icon" src="#" /> */}
      <button className="text-neutral-100 ml-4">
        <ContentCutIcon className="p-1" />
      </button>
      <button className="text-neutral-100 ml-auto mr-4">
        <MenuIcon className="p-1" />
      </button>
    </motion.div>
  );
};

export default Navbar;
