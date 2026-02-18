import { TimelineItem } from "@/lib/data";

interface Props {
  items: TimelineItem[];
}

export function Timeline({ items }: Props) {
  return (
    <div className="space-y-8">
      {items.map((item, index) => (
        <div key={item.id} className="relative flex gap-x-4">
          {/* Left part: line and dot */}

          {index !== items.length - 1 && (
            <span
              className="absolute left-[7px] top-8 -bottom-10 w-[2px] bg-gray-200 dark:bg-gray-700"
              aria-hidden="true"
            />
          )}
          
          {/* dot */}
          <div className="relative flex h-6 w-4 flex-none items-center justify-center bg-white dark:bg-gray-900">
            <span className="h-4 w-4 rounded-full bg-blue-600 ring-4 ring-white dark:ring-gray-900" />
          </div>

          {/* Right part: contents*/}
          <div className="flex-auto py-0.5 font-sans">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white leading-none">
              {item.title}
            </h3>
            
            <div className="flex flex-wrap gap-2 items-center text-sm mt-2 mb-3">
               <span className="font-medium text-gray-700 dark:text-gray-300">
                 {item.organization}
               </span>
               <span className="text-gray-300 dark:text-gray-600">•</span>
               <span className="text-blue-600 bg-blue-50 dark:bg-blue-900/30 px-2.5 py-0.5 rounded-md text-xs font-medium">
                 {item.date}
               </span>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              {item.description}
            </p>
            
            {/* Highlights/tags */}
            {item.highlights && (
              <div className="flex flex-wrap gap-2 mt-4">
                {item.highlights.map((highlight) => (
                  <span key={highlight} className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                    {highlight}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}