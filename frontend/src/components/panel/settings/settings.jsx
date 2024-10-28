import useSettings from "../../../hooks/panel/useSettings";

function Settings() {
  const { status, formData, handleChange, handleSubmit } = useSettings();

  return (
    <form className="md:w-4/5 w-[90%] mx-auto" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-12">
          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  placeholder="contato@email.com.br"
                  className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none font-medium"
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Senha
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="password"
                  placeholder="******"
                  className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none font-medium"
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Primeiro Nome
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="firstName"
                  id="first-name"
                  value={formData.firstName}
                  onChange={handleChange}
                  autoComplete="given-name"
                  placeholder="Name"
                  className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none font-medium"
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Sobrenome
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="lastName"
                  id="last-name"
                  value={formData.lastName}
                  onChange={handleChange}
                  autoComplete="family-name"
                  placeholder="Sobrenome"
                  className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none font-medium"
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-2 mt-1">
              <label
                htmlFor="phone"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Telefone
              </label>
              <div className="mt-2">
                <div className="flex rounded-md w-full shadow-sm ring-1 ring-inset ring-gray-300 bg-white outline-none px-2">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    typeof="tel"
                    autoComplete="tel"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 outline-none w-full font-medium"
                    placeholder="(19) 99999-9999"
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Instagram
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="instagram"
                  id="instagram"
                  value={formData.instagram}
                  onChange={handleChange}
                  autoComplete="instagram"
                  placeholder="instagram"
                  className="block w-full rounded-md border-0 py-1.5 pl-3 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 font-medium"
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Linkedin
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="linkedin"
                  id="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  autoComplete="linkedin"
                  placeholder="linkedin"
                  className="block w-full rounded-md border-0 py-1.5 pl-3 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 font-medium"
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Github
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="github"
                  id="github"
                  value={formData.github}
                  onChange={handleChange}
                  autoComplete="github"
                  placeholder="github"
                  className="block w-full rounded-md border-0 py-1.5 pl-3 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 font-medium"
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Dribbble
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="dribbble"
                  id="dribbble"
                  value={formData.dribbble}
                  onChange={handleChange}
                  autoComplete="dribbble"
                  placeholder="dribbble"
                  className="block w-full rounded-md border-0 py-1.5 pl-3 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 font-medium"
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-2 flex justify-start items-center">
              <button
                type="button"
                // onClick={handleCancel}
                className="text-sm font-semibold leading-6 text-gray-900 w-[100px]"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="w-24 h-10 bg-black rounded-md text-white font-medium hover:bg-[#2563eb]"
              >
                Update
              </button>
            </div>
          </div>
          {status === "success" && (
            <div className="text-green-600 font-medium">
              Information updated successfully!
            </div>
          )}
          {status === "error" && (
            <div className="text-red-600 font-medium">
              Error updating information. Please try again.
            </div>
          )}
        </div>
      </div>
    </form>
  );
}

export default Settings;
