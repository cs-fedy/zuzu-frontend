type TChipProps = {
  label: string;
  selected?: boolean;
  toggleSelected: (label: string) => void;
};

function Chip({ label, selected = false, toggleSelected }: TChipProps) {
  const handleToggleSelected = () => {
    toggleSelected(label);
  };

  return (
    <button
      type="button"
      onClick={handleToggleSelected}
      className={`${
        selected ? "bg-primary-500 text-white" : "bg-white text-primary-500"
      } mb-2 rounded-full border-2 border-primary-500 px-6 py-2 capitalize`}
    >
      {label}
    </button>
  );
}

export default Chip;
