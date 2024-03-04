type Props = {
  text: string | undefined;
};
export default function InfoCard({ text }: Props) {
  return (
    <div className="bg-[var(--black)] w-fit h-fit px-6 py-2 rounded-md">
      {text}
    </div>
  );
}
