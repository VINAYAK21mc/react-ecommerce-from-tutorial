export default function FeatureCard(props) {
  return (
    <div className="flex gap-2 bg-gray-100 px-4 py-6">
      {props.icon}
      <div>
        <h2 className="font-medium text-xl">{props.title}</h2>
        <p className="text-gray-600">{props.desc}</p>
      </div>
    </div>
  );
}
