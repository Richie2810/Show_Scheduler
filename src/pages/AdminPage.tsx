import Admin from "../components/Admin";
import { useHistory } from "react-router-dom";

export default function AdminPage() {
  const history = useHistory();

  const logOut = () => {
    history.push("/");
    window.location.reload();
  };
  return (
    <div className="Admin">
      <Admin />
      <button
        type="button"
        onClick={() => {
          logOut();
        }}
      >
        Log out
      </button>
    </div>
  );
}
