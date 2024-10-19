import Form from "../components/Form";
import { google_icon, outlook_icon } from "../data/AssetsImport";

function Home() {
  return (
    <div className="max-w-[510px] h-full flex items-center justify-center mx-auto ">
      <div className="w-full my-[1rem] sm:min-h-[70%] bg-white p-[30px] rounded-[12px]">
        <section className="w-full justify-center items-center flex flex-col gap-y-[0.5rem]">
          <h1 className="text-2xl text-primary-highlight_text font-semibold">
            Welcome
          </h1>
          <p className="font-lato text-primary-dull_text text-base">
            Sign In for Seamless Experiences!
          </p>
        </section>
        <section className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-y-[1rem]">
          <div className="flex justify-between items-center bg-[#E5E7EB] px-[1rem] py-[10px] rounded-[6px] border-2 border-[#EAECF0] gap-x-2 cursor-pointer">
            <img
              src={google_icon}
              alt="Google Icon"
              className="w-[20px] h-[20px]"
            />
            <p className="text-base font-mulish font-medium text-[#101828]">
              Sign In with Google
            </p>
          </div>
          <div className="flex justify-between items-center px-[1rem] py-[10px] rounded-[6px] border-2 border-[#EAECF0] gap-x-2 cursor-pointer">
            <img
              src={outlook_icon}
              alt="Outlook Icon"
              className="w-[20px] h-[20px] "
            />
            <p className="text-base font-mulish font-medium text-[#101828]">
              Sign In with Outlook
            </p>
          </div>
        </section>
        <section className="flex items-center justify-between  mt-8 gap-x-2">
          <span className="w-full h-[1px] bg-[#E5E7EB]"></span>
          <p className="text-sm text-primary-dull_text">or</p>
          <span className="w-full h-[1px] bg-[#E5E7EB]"></span>
        </section>

        <section className="mt-8">
          <Form />
        </section>
        <section className="mt-3">
          <div className="flex w-full items-center justify-center gap-x-2 font-lato text-base text-[#98A2B3]">
            <p className="cursor-pointer">Forgot Password?</p>
            <p className="text-primary-highlight_text font-bold cursor-pointer">
              Reset
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
