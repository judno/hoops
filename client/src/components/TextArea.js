export function TextArea({ label, onChange, value }) {
  return (
    <div>
      <label className="text-lg font-semibold tracking-wide" htmlFor={label}>
        {label}
      </label>
      <textarea
        className="focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 px-2"
        type="text"
        id={label}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
