import ctn from './content.module.css';
import itm from './item.module.css';
import tit from './title.module.css';

export const NewAccordion = ({ list, selected, toggle, ...props }) => {
    return (
      <section className="w-full" {...props}>
        {list.map(({ title, content, id, contentButton }, index) => {
          const isSelected = selected === index;
          return (
            <div key={id} className={`${itm.item} bg-secondary-12`}>
              <button
                onClick={() => toggle(index)}
                className={`${tit.title} ${isSelected &&
                  `${tit.show} text-gray-darkest`} w-full text-secondary-2`}
              >
                <h2 className="text-base font-bold m-0">{title}</h2>
                <div className="chevron-wrapper ml-4">
                  <svg
                    width={16}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 13"
                  >
                    <path d="M23.71.29a1,1,0,0,0-1.42,0L12,10.59,1.71.29A1,1,0,0,0,.29,1.71l11,11a1,1,0,0,0,1.42,0l11-11A1,1,0,0,0,23.71.29Z" />
                  </svg>
                </div>
              </button>
              <div className="for-seo">
                <div
                  className={`${ctn.content} ${isSelected && ctn.show}`}
                  role="region"
                  itemProp="text"
                >
                  {content}
                  {contentButton && contentButton}
                </div>
              </div>
            </div>
          );
        })}
      </section>
    );
  };