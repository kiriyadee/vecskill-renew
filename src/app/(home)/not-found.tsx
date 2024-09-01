"use client";

import { toast } from "sonner";

const NotFound = () => {
  return (
    <div>
      Not Found
      <div>
        <button onClick={(e) => toast("This is a sonner toast")}>
          Render my toast
        </button>
      </div>
    </div>
  );
};

export default NotFound;
