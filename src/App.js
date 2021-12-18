const names = ["red", "blue", "green", "yellow"];
const values = [100, 200, 300, 400, 500, 600, 700];

export default function App() {
  return (
    <div className="h-screen grid grid-cols-4 grid-rows-10">
      {values.map((value) =>
        names.map((name) => (
          <div
            className={`bg-${name}-${value} hover:bg-${name}-${value + 200}`}
          />
        ))
      )}
    </div>
  );
}
