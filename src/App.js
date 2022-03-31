import './App.css'
// import Address from './components/adddress/Address'

function App() {
  return (
    <div className="h-screen">
      <div>
        <div className="pt-5 text-center">
          <hr />
          <h1 className="text-3xl font-semibold ">Add Address</h1>
          <hr />
        </div>
        <div className="max-w-[80%] flex flex-col justify-center items-center mr-auto ml-auto">
          <div className="flex min-w-[100%] pt-4 pb-4 place-content-between">
            <div className="flex min-w-[30%] pt-4 pb-4 place-content-between">
              <h4 className="text-lg font-semibold">Country Selection</h4>
              <div className="border-2 p-3 rounded-md">
                <p>Australia</p>
                <p className="pt-2">New Zealand</p>
              </div>
            </div>
            <div>
              <button
                type="submit"
                value="Submit"
                className="text-white pt-2 pb-2 pr-4 pl-4 rounded-md bg-green-500"
              >
                Save
              </button>
              <br />
              <br />
              <button className="text-white pt-2 pb-2 pr-4 pl-4 rounded-md bg-red-500">
                Cancel
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-[70%] flex flex-col justify-center items-center mr-[20%] ml-[10%]">
          <div className="flex min-w-[100%] justify-start pb-8">
            <label className="min-w-[50%]">
              <p className="pb-2">Company name</p>
              <input
                type="ext"
                placeholder=" Text"
                className="border-2 rounded-md min-w-[90%] pl-2 h-9"
              />
            </label>
            <label className="min-w-[50%]">
              <p className="pb-2">Customer name</p>
              <input
                type="text"
                placeholder=" Text"
                className="border-2 rounded-md min-w-[90%] pl-2 h-9"
              />
            </label>
          </div>

          <div className="flex min-w-[100%] justify-start pb-10">
            <h4 className="text-lg font-semibold flex-1 max-w-[20%]">
              Address Search
            </h4>
            <p className="max-w-[80%]">
              Lookup address in Selected Country enter at least 3 characters to
              pre-populate
            </p>
          </div>

          <div className="min-w-[100%] justify-start pb-4">
            <label className="flex">
              <p className="flex-1 max-w-[20%]">Street Address 1</p>
              <input
                type="text"
                placeholder="Text"
                className="border-2 rounded-md min-w-[75%] pl-2 h-9"
              />
            </label>
            <br />
            <label className="flex">
              <p className="flex-1 max-w-[20%]">Street Address 2</p>
              <input
                type="text"
                placeholder="Text"
                className="border-2 rounded-md min-w-[75%] pl-2 h-9"
              />
            </label>
          </div>

          <div className="min-w-[100%] justify-start pb-3">
            <div className="relative">
              <label className="flex pb-3">
                <p className="flex-1 max-w-[20%]">Suburb</p>
                <input
                  type="text"
                  placeholder="Text"
                  className="border-2 rounded-md min-w-[25%] pl-2 h-9"
                />
              </label>
              <label className="flex pb-3">
                <p className="flex-1 max-w-[20%]">City</p>
                <input
                  type="text"
                  placeholder="Text"
                  className="border-2 rounded-md min-w-[25%] pl-2 h-9"
                />
              </label>
              <div className="border-2 p-2 rounded-md w-[30%] absolute bottom-8 right-48 pl-4">
                <p>Albury, NSW</p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-1 max-w-[20%]">
                <p className="w-[110px] h-[100px] border-2 pl-2 pt-2 border-dashed">
                  State
                </p>
              </div>
              <div className="border-2 pr-16 pl-5 pt-5 rounded-md ">
                <p>ACT</p>
                <p className="pt-2">NSW</p>
              </div>
            </div>
          </div>

          <div className="flex min-w-[100%] justify-start pb-7">
            <h4 className="text-lg font-semibold flex-1">Custom Fields</h4>
          </div>

          <div className="min-w-[100%] justify-start">
            <label className="flex pb-12">
              <p className="flex-1 max-w-[20%]">CustomBoolean</p>
              <input
                type="checkbox"
                placeholder="Text"
                className="w-6 h-6 Ccheckbox"
              />
            </label>

            <div className="flex pb-3 relative">
              <p className="flex-1 max-w-[20%]">CustomTextOptions</p>
              <div className="border-2 pr-60 pl-5 pt-4 rounded-md ">
                <p>Custom 1</p>
                <div className="flex pt-2">
                  <p>Custom 2</p>
                  <p className="pl-3 pb-4">Option 2</p>
                </div>
              </div>
              <p className="absolute bottom-5 left-0">Required Field</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
