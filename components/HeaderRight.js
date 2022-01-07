import { useSelector } from "react-redux";
export const HeaderRight = ({ children }) => {
  const app = useSelector(state => state.app)
  return (
    app[0] ?
      <div className="header-right">payment: <span>{app[0].paymentProcessing.payoutScheme}</span></div>
      : null
  )
}