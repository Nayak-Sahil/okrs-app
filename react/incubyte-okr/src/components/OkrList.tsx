import type { KeyResultType, OkrType } from '../types/okr_types.ts';

interface OkrListProps {
  okrs: OkrType[];
}

export function OkrList({ okrs }: Readonly<OkrListProps>) {
  return (
    <div className="space-y-8 w-[900px]">
      {okrs.map((okr, index) => (
        <div key={index} className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
          <h3 className="text-2xl font-bold mb-6 leading-tight">{okr.objective}</h3>
          <div className="space-y-3">
            {okr.keyResults.map((keyResult, krIdx) => (
              <KeyResult key={krIdx} keyResult={keyResult} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

interface KeyResultProps {
  keyResult: KeyResultType;
}

function KeyResult({ keyResult }: Readonly<KeyResultProps>) {
  return (
    <div className="flex items-center gap-3">
      <input
        type="checkbox"
        name="completed"
        id={'keyResultCheckbox'}
        checked={keyResult.isCompleted}
        className="w-5 h-5 accent-blue-600 rounded-full border-2 border-gray-300 focus:ring-0 focus:outline-none cursor-pointer"
      />
      <label htmlFor={'keyResultCheckbox'} className="text-base text-gray-800">
        {keyResult.description}
      </label>
    </div>
  );
}
