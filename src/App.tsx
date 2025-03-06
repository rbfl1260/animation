import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  &:hover {
    cursor: pointer;
  }
`;

const Grid = styled.div`
  display: grid;
  width: 50vw;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;

const Overlay = styled(motion.div)`
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const OverlayVariants = {
  initial: {
    backgroundColor: "rgba(0,0,0,0)",
  },
  visible: {
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  leaving: {
    backgroundColor: "rgba(0,0,0,0)",
  },
};

function App() {
  const [id, setId] = useState<null | string>(null);

  return (
    <Wrapper>
      <Grid>
        {[1, 2, 3, 4].map((n) => (
          <Box key={n} layoutId={n + ""} onClick={() => setId(n + "")} />
        ))}
      </Grid>
      <AnimatePresence>
        {id ? (
          <Overlay
            variants={OverlayVariants}
            initial="initial"
            animate="visible"
            exit="leaving"
            onClick={() => setId(null)}
          >
            <Box
              style={{ width: "400px", height: "200px", cursor: "default" }}
              layoutId={id}
              onClick={(e) => e.stopPropagation()}
            />
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
