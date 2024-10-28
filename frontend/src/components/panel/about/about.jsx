import useAbout from "../../../hooks/panel/useAbout";

function About() {
  const { title, text, file, setTitle, setText, setFile, handleSubmit, status } = useAbout();

  const handleInputChange = (setter) => (e) => setter(e.target.value);
  const handleFileChange = (e) => setFile(e.target.files[0]);

  return (
    <form
      className="md:w-4/5 w-[90%] mt-6 mx-auto flex-col flex gap-y-5"
      onSubmit={handleSubmit}
    >
      {/* Title Field */}
      <FormField 
        label="Title"
        id="title"
        placeholder="About us"
        value={title}
        onChange={handleInputChange(setTitle)}
        type="text"
        required
      />

      {/* Description Field */}
      <FormField 
        label="Description"
        id="description"
        value={text}
        onChange={handleInputChange(setText)}
        as="textarea"
        required
        additionalClass="h-32 overflow-y-scroll"
      />

      {/* File Upload */}
      <div>
        <input
          className="block w-full text-sm text-gray-900 cursor-pointer focus:outline-none"
          id="file_input"
          type="file"
          onChange={handleFileChange}
        />
      </div>

      {/* Submit Button */}
      <button type="submit" className="w-24 h-10 bg-black rounded-md text-white font-medium hover:bg-[#2563eb]">
        Update
      </button>

      {/* Status Messages */}
      {status && (
        <div className={status === "success" ? "text-green-600" : "text-red-600"}>
          <span className="font-medium">
            {status === "success" 
              ? "Information updated successfully!" 
              : "Error updating information. Please try again."}
          </span>
        </div>
      )}
    </form>
  );
}

// Reusable FormField component
const FormField = ({ label, id, placeholder, value, onChange, type = "text", required, as, additionalClass }) => {
  const InputElement = as === "textarea" ? "textarea" : "input";

  return (
    <div className="sm:col-span-6 mt-1">
      <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="mt-2">
        <div className="flex rounded-md w-full shadow-sm ring-1 ring-inset ring-gray-300 bg-white outline-none px-2">
          <InputElement
            name={id}
            id={id}
            className={`block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 outline-none w-full font-medium ${additionalClass}`}
            placeholder={placeholder}
            required={required}
            type={type}
            value={value}
            onChange={onChange}
            // Ensure input and textarea are editable
          />
        </div>
      </div>
    </div>
  );
}

export default About;
