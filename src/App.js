import { useState } from 'react'
import './App.css'
import isEmpty from 'validator/lib/isEmpty'
// import Address from './components/adddress/Address'

function App() {
  const [inputs, setInputs] = useState({
    country: '',
    companyName: '',
    customerName: '',
    address1: '',
    address2: '',
    subrb: '',
    city: '',
    postcode: '',
    state: '',
    email: '',
    telephone: '',
  })
  const [validationMsg, setValidationMsg] = useState('')
  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setInputs((values) => ({ ...values, [name]: value }))
  }

  const validateAll = () => {
    const msg = {}
    if (isEmpty(inputs.companyName)) {
      msg.companyName = 'Please enter company name'
    }

    if (isEmpty(inputs.address1)) {
      msg.address1 = 'Please enter Street Address 1'
    }

    if (isEmpty(inputs.subrb)) {
      msg.subrb = 'This field is required'
    }

    if (isEmpty(inputs.city)) {
      msg.city = 'This field is required'
    }

    if (isEmpty(inputs.postcode)) {
      msg.postcode = 'This field is required'
    }

    if (isEmpty(inputs.state)) {
      msg.state = 'This field is required'
    }

    setValidationMsg(msg)
    if (Object.keys(msg).length > 0) return false
    return true
  }

  const handleSubmit = (event) => {
    const isValid = validateAll()
    if (!isValid) return
    event.preventDefault()
    console.log(inputs)
  }

  return (
    <div className="h-screen">
      <div className="pt-5 text-center">
        <hr />
        <h1 className="text-3xl font-semibold ">Add Address</h1>
        <hr />
      </div>
      <form onSubmit={handleSubmit} className="max-w-[1000px] mr-auto ml-auto">
        <div className="flex flex-col pt-4 pb-4 max-w-[40%]">
          <label className="flex justify-between">
            <p className="text-lg font-semibold">Country</p>
            <input
              type="text"
              placeholder="Text"
              name="country"
              value={inputs.country || ''}
              onChange={handleChange}
              className="border-2 rounded-md min-w-[10%] pl-2 h-9"
            />
          </label>
        </div>
        <div className="flex flex-col pt-6">
          <div className="flex min-w-[100%] pb-8">
            <label className="min-w-[50%]">
              <p className="pb-2">Company name</p>
              <input
                type="text"
                placeholder=" Text"
                name="companyName"
                value={inputs.companyName || ''}
                onChange={handleChange}
                className="border-2 rounded-md min-w-[90%] pl-2 h-9"
              />
              <p className="text-red-400 text-sx italic">
                {validationMsg.companyName}
              </p>
            </label>
            <label className="min-w-[50%]">
              <p className="pb-2">Customer name</p>
              <input
                type="text"
                placeholder="Text"
                name="customerName"
                value={inputs.customerName || ''}
                onChange={handleChange}
                className="border-2 rounded-md min-w-[100%] pl-2 h-9"
              />
            </label>
          </div>

          <div className="flex flex-col min-w-[100%] pb-5">
            <div className="flex">
              <h4 className="text-lg font-semibold flex-1 max-w-[20%]">
                Address Search
              </h4>
              <p className="max-w-[80%]">
                Lookup address in Selected Country enter at least 3 characters
                to pre-populate
              </p>
            </div>
            <input
              type="text"
              placeholder="Text"
              className="border-2 rounded-md pl-2 h-9 mt-6"
            />
          </div>

          <div className="min-w-[100%] justify-start pb-4">
            <label className="flex flex-col pb-4">
              <p className="pt-1 pb-2">Street Address 1</p>
              <input
                type="text"
                placeholder="Text"
                name="address1"
                value={inputs.address1 || ''}
                onChange={handleChange}
                className="border-2 rounded-md pl-2 h-9"
              />
              <p className="text-red-400 text-sx italic">
                {validationMsg.address1}
              </p>
            </label>
            <label className="flex flex-col">
              <div className="flex justify-between">
                <p className="pt-1 pb-2">Street Address 2</p>
                <p className="pt-3 text-sm">Optional</p>
              </div>
              <input
                type="text"
                placeholder="Text"
                name="address2"
                value={inputs.address2 || ''}
                onChange={handleChange}
                className="border-2 rounded-md pl-2 h-9"
              />
            </label>
          </div>

          <div className="flex min-w-[100%] pb-8">
            <label className="min-w-[50%]">
              <p className="pb-2">Suburb</p>
              <input
                type="text"
                placeholder="Text"
                name="subrb"
                value={inputs.subrb || ''}
                onChange={handleChange}
                className="border-2 rounded-md min-w-[90%] pl-2 h-9"
              />
              <p className="text-red-400 text-sx italic">
                {validationMsg.subrb}
              </p>
            </label>
            <label className="min-w-[50%]">
              <p className="pb-2">City</p>
              <input
                type="text"
                placeholder="Text"
                name="city"
                value={inputs.city || ''}
                onChange={handleChange}
                className="border-2 rounded-md min-w-[100%] pl-2 h-9"
              />
              <p className="text-red-400 text-sx italic">
                {validationMsg.city}
              </p>
            </label>
          </div>

          <div className="flex min-w-[100%] pb-8">
            <label className="min-w-[50%]">
              <p className="pb-2">Postcode</p>
              <input
                type="number"
                placeholder="Text"
                name="postcode"
                value={inputs.postcode || ''}
                onChange={handleChange}
                className="border-2 rounded-md min-w-[90%] pl-2 h-9"
              />
              <p className="text-red-400 text-sx italic">
                {validationMsg.postcode}
              </p>
            </label>
            <label className="min-w-[50%]">
              <p className="pb-2">State</p>
              <input
                type="text"
                placeholder="Text"
                name="state"
                value={inputs.state || ''}
                onChange={handleChange}
                className="border-2 rounded-md min-w-[100%] pl-2 h-9"
              />
              <p className="text-red-400 text-sx italic">
                {validationMsg.state}
              </p>
            </label>
          </div>

          <div className="flex min-w-[100%] pb-8">
            <label className="min-w-[50%]">
              <p className="pb-2">Email</p>
              <input
                type="email"
                placeholder="Text"
                name="email"
                value={inputs.email || ''}
                onChange={handleChange}
                autoComplete="email"
                className="border-2 rounded-md min-w-[90%] pl-2 h-9"
              />
            </label>
            <label className="min-w-[50%]">
              <p className="pb-2">Telephone</p>
              <input
                type="number"
                placeholder="Text"
                name="telephone"
                value={inputs.telephone || ''}
                onChange={handleChange}
                className="border-2 rounded-md min-w-[100%] pl-2 h-9"
              />
            </label>
          </div>

          <div className="flex justify-end">
            <button className="text-white pt-2 pb-2 pr-4 pl-4 rounded-md bg-red-500">
              Cancel
            </button>
            <button
              type="button"
              className="text-white pt-2 pb-2 pr-4 pl-4 rounded-md bg-green-500 ml-6"
              onClick={handleSubmit}
            >
              Add to Address
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default App
