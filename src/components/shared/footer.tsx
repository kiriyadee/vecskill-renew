import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const Footer = () => {
  return (
    <div className="text-white p-4 flex" style={{ backgroundColor: "#101840" }}>
      <div className="container mx-auto flex justify-between">
        <h2 color="#fffaed">Made with ♥ by team</h2>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              {/* justifyContent="right" size={600} color="#fffaed" */}
              <div className="justify-content-right font-bold text-white">
                <Link href="https://github.com/enwuft/my-app/issues/new">
                  Request for Comment
                </Link>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>เเสดงความคิดเห็น หรือเพิ่มฟีเจอร์ใหม่ๆได้ที่ Github</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default Footer;
