import { Providers } from "@/common/config/providers";
import { StackApp } from "@/navigation/stacks";

const App = () => {
  return (
    <Providers>
      <StackApp />
    </Providers>
  );
};

export default App;
