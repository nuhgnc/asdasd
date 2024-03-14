"use client";
import { MdSearch } from "react-icons/md";
import styles from "./search.module.css";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function Search({ placeholder }) {
  const searhParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback( (e) => {
    const params = new URLSearchParams(searhParams);
    params.set("page",1)
    e.target.value ? e.target.value.length > 2 && params.set("q", e.target.value) : params.delete("q");
    replace(`${pathname}?${params}`);
  },300,{trailing:true});

 
  return (
    <div className={styles.container}>
      <MdSearch />
      <input
        type="text"
        className={styles.input}
        placeholder={placeholder}
        onChange={handleSearch}
        name=""
        id=""
      />
    </div>
  );
}
