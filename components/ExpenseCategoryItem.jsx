import { currencyFormatter } from "@/lib/currencyFormatter";

function ExpenseCategoryItem({ color, title, total }) {
  return (
    <button>
      <div className="flex items-center justify-between px-4 py-4 bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-2xl ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
        <div className="flex items-center gap-2">
          <div
            className="w-[25px] h-[25px] rounded-full"
            style={{ backgroundColor: color }}
          />
          <h4 className="capitalize">{title}</h4>
        </div>
        <p>{currencyFormatter(total)}</p>
      </div>
    </button>
  );
}

export default ExpenseCategoryItem;
