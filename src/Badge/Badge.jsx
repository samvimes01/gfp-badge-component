import "./Badge.css";

function Badge({ size = "xs", type = "primary", label = "Label" }) {
  const renderBadge = () => {
    let fontSize = size == "xs" ? "text-xs" : "text-sm";
    let color = "text-neutral-600";
    let bgColor = "bg-gray-50";
    let borderColor = "border-gray-50";
    let py = "py-0.5";
    let px = "px-1.5";
    switch (type) {
      case "error":
        borderColor = "border-red-200";
        bgColor = "bg-red-50";
        color = "text-red-600";
        break;
      case "warning":
        borderColor = "border-amber-200";
        bgColor = "bg-amber-50";
        color = "text-amber-700";
        break;
      case "success":
        borderColor = "border-green-700";
        bgColor = "bg-green-50";
        color = "text-green-500";
        break;
      case "brand":
        borderColor = "border-indigo-700";
        bgColor = "bg-indigo-50";
        color = "text-indigo-500";
        break;
    }
    switch (size) {
      case "sm":
        px = "px-2";
        break;
      case "lg":
        py = "py-1";
        px = "px-2.5";
        break;
    }
    return (
      <span
        className={`badge self-baseline flex justify-center items-center ${py} ${px} border rounded-full ${borderColor} ${color} ${bgColor} ${fontSize}`}
      >
        {label}
      </span>
    );
  };
  return renderBadge();
}

export default Badge;
