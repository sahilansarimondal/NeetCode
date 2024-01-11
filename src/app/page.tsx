import Button from "@/components/Button";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function Home() {
  // const data = await getServerSession(authOptions);
  // console.log(data);
  // if (data?.user) {
  //   return (
  //     <div>
  //       <div className="flex justify-between border-b-2 py-2 px-4">
  //         <h2 className=" text-2xl font-bold">
  //           {data.user.email?.split("@")[0].toUpperCase()}
  //         </h2>
  //         <Button name={"logout"} />
  //       </div>
  //       <div className="flex text-4xl justify-center  pt-14">hello</div>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div>
  //       <div className="flex justify-between border-b-2 py-2 px-4">
  //         <h2 className=" text-2xl font-bold">App</h2>
  //         <Button name={"signin"} />
  //       </div>
  //       <div className="flex text-4xl justify-center  pt-14">hello</div>
  //     </div>
  //   );
  // }

  return <main>hello</main>;
}
