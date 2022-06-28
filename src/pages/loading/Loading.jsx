import { useState, useEffect } from "react";
import { useLocalStorage } from "../../utils/useLocalStorage";
import { Wrapper, Container } from "./Loading.styled";
import ClockLoader from "react-spinners/ClockLoader";

const Loading = () => {
  const [loading, setLoading] = useState(false);
  const storeLoading = useLocalStorage("first-entry", loading); // TODO: set this localStorage.

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);

  return (
    <Wrapper>
      <Container>
        {loading ? (
          <ClockLoader
            color={"#f5f5f5"}
            loading={loading}
            size={150}
          />
        ) : null}
      </Container>
    </Wrapper>
  );
};

export default Loading;
