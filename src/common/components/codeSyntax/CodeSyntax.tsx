import { StyleSheet, Text, View } from "react-native";
import SyntaxHighlighter from "react-native-syntax-highlighter";

interface Props {
  code: string;
}

const CodeSyntax = ({ code }: Props) => {
  //   const codeString = "(num) => num + 1";

  return (
    <SyntaxHighlighter
      language="javascript"
      // style={docco}
      highlighter={"prism" || "hljs"}
    >
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeSyntax;

const styles = StyleSheet.create({});
