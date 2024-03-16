import { Button } from "../../shared/button/button";
import "./todoActions.scss";

export const TodoActions = ({reset, deleteComplited}) => {
  return (
    <section className="actions">
      <Button onClick={reset}>Delete all</Button>
      <Button onClick={deleteComplited}>Delete complited</Button>
    </section>
  );
};
