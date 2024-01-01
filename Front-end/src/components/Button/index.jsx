import { Button } from "./style";

export default function index({ children, ...props }) {
  return <Button {...props}>{children}</Button>;
}
