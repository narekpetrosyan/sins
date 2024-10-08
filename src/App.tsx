import { useCopyToClipboard } from "usehooks-ts"
import { Layout } from "./components/Layout"

function App() {
  const [value, copyFn] = useCopyToClipboard()

  return (
    <Layout>
      <div className="w-full max-h-700 min-h-700 h-full bg-frame3 flex justify-center items-end">
        <div className="lg:max-w-700 max-w-96">
          <img src="/images/sins.png" className="w-full h-full" />
        </div>
      </div>

      <div className="w-full bg-white flex items-center justify-center">
        <div className="flex flex-col items-center justify-center py-6 gap-4">
          <h3 className="lg:text-5xl text-base font-bold bg-gradient bg-clip-text text-transparent">
            $SINS - Just a man of many means
          </h3>
          <div className="w-10/12 bg-black h-[1px]"></div>
          <div className="flex items-center gap-2 lg:flex-row flex-col">
            <p className="lg:text-2xl text-sm">CA: DoxMHskldniw4820vj0uhfdTuqCjZC8oiwm7c</p>
            <button
              onClick={() => copyFn("DoxMHskldniw4820vj0uhfdTuqCjZC8oiwm7c")}
              className="bg-black px-3 py-1 text-white text-base flex items-center gap-1"
            >
              COPY
              {!value && <img src="/images/copy.png" alt="copy" className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <div className="w-full h-full bg-frame2 flex flex-col items-center pt-6 bg-no-repeat bg-cover">
        <div className="max-h-1048 w-auto h-full">
          <img src="/images/moon.png" className="w-full h-full" />
        </div>
        <div className="max-h-560 w-auto h-full -mt-20">
          <img src="/images/sinsAstro.png" className="w-full h-full" />
        </div>
      </div>

      <div className="w-full bg-white flex items-center justify-center">
        <div className="flex flex-col items-center justify-center py-10 gap-8">
          <div className="flex flex-col items-center">
            <h3 className="lg:text-3xl text-xs font-bold text-black max-w-888 text-center">
              IN FACT $SINS IS ANYTHING YOU CAN THINK OF!!!
            </h3>
            <h3 className="lg:text-3xl text-xs font-bold text-black max-w-888 text-center">
              JOIN THE $SINS COMMUNITY AND BE INSPIRED
            </h3>
            <h3 className="lg:text-3xl text-xs font-bold text-black max-w-888 text-center">
              TO BE ANYTHING YOU WANT TO BE!!
            </h3>
          </div>
          <div className="w-full bg-black h-[1px]"></div>
          <div className="flex lg:gap-16 gap-6">
            <button className="bg-black p-4 flex items-center justify-center">
              <img src="/images/tiktok.svg" alt="copy" className="lg:w-8 lg:h-8 w-4 h-4" />
            </button>
            <button className="bg-black p-4 flex items-center justify-center">
              <img src="/images/x.svg" alt="copy" className="lg:w-8 lg:h-8 w-4 h-4" />
            </button>
            <button className="bg-black p-4 flex items-center justify-center">
              <img src="/images/telegram.svg" alt="copy" className="lg:w-8 lg:h-8 w-4 h-4" />
            </button>
            <button className="bg-black p-4 flex items-center justify-center">
              <img src="/images/eagle.svg" alt="copy" className="lg:w-8 lg:h-8 w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="w-full h-full bg-black flex flex-col items-center pt-6 pb-24 relative lg:gap-24 gap-10">
        <div className="flex flex-col lg:gap-12 gap-6 max-w-954 w-full items-center">
          <h3 className="lg:text-5xl text-2xl font-bold bg-gradient bg-clip-text text-transparent">
            BUY $SINS
          </h3>

          <div className="w-10/12 bg-white h-[2px]" />

          <div className="flex items-center justify-around w-full">
            <div className="flex flex-col gap-3 items-center">
              <h3 className="lg:text-3xl font-bold text-base text-white">MARKET CAP</h3>
              <div className="bg-white h-[2px] w-full" />
              <p className="lg:text-3xl font-bold text-base text-[#14F500]">$12,125,125</p>
            </div>

            <div className="flex flex-col gap-3 items-center">
              <h3 className="lg:text-3xl font-bold text-base text-white">24H VOLUME</h3>
              <div className="bg-white h-[2px] w-full" />
              <p className="lg:text-3xl font-bold text-base text-[#14F500]">$12,125,125</p>
            </div>

            <div className="flex flex-col gap-3 items-center">
              <h3 className="lg:text-3xl font-bold text-base text-white">HOLDERS</h3>
              <div className="bg-white h-[2px] w-full" />
              <p className="lg:text-3xl font-bold text-base text-[#14F500]">125,125</p>
            </div>
          </div>
        </div>

        <div className="max-w-1048 lg:h-700 w-full h-406">
          <iframe
            className="w-full h-full"
            src="https://raydium.io/swap/?inputMint=sol&outputMint=4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R"
          ></iframe>
        </div>

        <div className="absolute lg:w-44 w-24 bottom-0 left-4">
          <img className="w-full h-full" src="/images/sinsBlue.png" alt="sins-blue" />
        </div>
      </div>

      <div className="bg-white py-8 flex items-center justify-center">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col gap-4 items-center">
            <div className="flex flex-col items-center">
              <p className="text-center lg:text-base text-sm">
                <span className="font-bold">LEGAL DISCLAIMER:</span> $SINS is a crypto coin with no
                intrinsic value or expectation of financial return.
              </p>
              <p className="text-center lg:text-base text-sm">
                Just because some people are getting ridiculously rich buying crypto doesn’t mean
                you definitely will.
              </p>
            </div>

            <p className="text-center lg:text-base text-sm">
              $SINS is to be used strictly for getting laid and for entertainment AND INSPIRATION
              purposes only.
            </p>
          </div>

          <p className="font-bold">ALL RIGHTS RESERVED ©SINS 2024</p>
        </div>
      </div>
    </Layout>
  )
}

export default App
