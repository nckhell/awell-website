import { tracks } from '@/config/bq-tables'

export const TracksTableSpecs = () => {
  return (
    <div className="flex flex-col">
      <table className="table-fixed ignore-default-style divide-y divide-slate-300 dark:divide-slate-500">
        <thead>
          <tr className="text-slate-900 dark:text-white text-base font-semibold">
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left sm:pl-6 md:pl-0"
            >
              Column
            </th>
            <th scope="col" className="py-3.5 px-3 text-left">
              Type
            </th>
            <th scope="col" className="py-3.5 px-3 text-left">
              Description
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
          {tracks.map(({ property, type, description }) => (
            <tr
              key={property}
              className="text-slate-900 dark:text-slate-100"
            >
              <td className="font-semibold py-4 pl-4 pr-3 sm:pl-6 md:pl-0">
                {property}
              </td>
              <td className="py-4 px-3 text-base">
                {type}
              </td>
              <td className="py-4 px-3 text-base">
                {description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

