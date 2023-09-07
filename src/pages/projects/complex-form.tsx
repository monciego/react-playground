import { SyntheticEvent, useState } from 'react';

export const ComplexForm = (): JSX.Element => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    comment: '',
    notifyComments: true,
    notifyCandidate: false,
    pushNotifications: '',
    gender: '',
  });

  const handleChange = (event: React.SyntheticEvent) => {
    const { name, value, type, checked } = event.target as HTMLInputElement;

    setFormData((prevFormData) => {
      return { ...prevFormData, [name]: type === 'checkbox' ? checked : value };
    });
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    console.log(formData);

    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      comment: '',
      notifyComments: true,
      notifyCandidate: false,
      pushNotifications: '',
      gender: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className='text-base font-semibold leading-7 text-gray-900'>
        Personal Information
      </h2>
      <p className='mt-1 text-sm leading-6 text-gray-600'>
        Use a permanent address where you can receive mail.
      </p>

      <div className='mt-6 mb-4 grid grid-cols-1 gap-4 sm:grid-cols-6'>
        <div className='sm:col-span-3'>
          <label
            htmlFor='first-name'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            First name
          </label>
          <div className='mt-2'>
            <input
              type='text'
              name='firstName'
              id='first-name'
              onChange={handleChange}
              value={formData.firstName}
              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            />
          </div>
        </div>

        <div className='sm:col-span-3'>
          <label
            htmlFor='last-name'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Last name
          </label>
          <div className='mt-2'>
            <input
              type='text'
              name='lastName'
              id='last-name'
              onChange={handleChange}
              value={formData.lastName}
              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            />
          </div>
        </div>

        <div className='sm:col-span-3'>
          <label
            htmlFor='email'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Email
          </label>
          <div className='mt-2'>
            <input
              type='email'
              name='email'
              id='email'
              onChange={handleChange}
              value={formData.email}
              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            />
          </div>
        </div>

        <div className='sm:col-span-3'>
          <label
            htmlFor='gender'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Gender
          </label>
          <div className='mt-2'>
            <select
              id='gender'
              name='gender'
              autoComplete='gender'
              value={formData.gender}
              onChange={handleChange}
              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            >
              <option hidden value=''>
                Gender
              </option>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
            </select>
          </div>
        </div>

        <div className='sm:col-span-6'>
          <label
            htmlFor='comment'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Comments
          </label>
          <textarea
            id='comment'
            name='comment'
            rows={3}
            className='block mt-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            onChange={handleChange}
            value={formData.comment}
          />
        </div>
      </div>

      <div className='border-b border-gray-900/10 pb-6'>
        <h2 className='text-base font-semibold leading-7 text-gray-900'>
          Notifications
        </h2>
        <p className='mt-1 text-sm leading-6 text-gray-600'>
          We'll always let you know about important changes, but you pick what
          else you want to hear about.
        </p>

        <div className='relative mt-4 flex gap-x-3'>
          <div className='flex h-6 items-center'>
            <input
              id='notify-comments'
              name='notifyComments'
              type='checkbox'
              onChange={handleChange}
              checked={formData.notifyComments}
              className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
            />
          </div>
          <div className='text-sm leading-6'>
            <label
              htmlFor='notify-comments'
              className='font-medium text-gray-900'
            >
              Comments
            </label>
            <p className='text-gray-500'>
              Get notified when someones posts a comment on a posting.
            </p>
          </div>
        </div>

        <div className='relative mt-4 flex gap-x-3'>
          <div className='flex h-6 items-center'>
            <input
              id='notify-candidate'
              name='notifyCandidate'
              type='checkbox'
              onChange={handleChange}
              checked={formData.notifyCandidate}
              className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
            />
          </div>
          <div className='text-sm leading-6'>
            <label
              htmlFor='notify-candidate'
              className='font-medium text-gray-900'
            >
              Candidates
            </label>
            <p className='text-gray-500'>
              Get notified when a candidate applies for a job.
            </p>
          </div>
        </div>

        <fieldset className='mt-6'>
          <legend className='text-sm font-semibold leading-6 text-gray-900'>
            Push Notifications
          </legend>
          <p className='mt-1 text-sm leading-6 text-gray-600'>
            These are delivered via SMS to your mobile phone.
          </p>

          <div className='mt-4 space-y-3'>
            <div className='flex items-center gap-x-3'>
              <input
                id='push-everything'
                name='pushNotifications'
                type='radio'
                value='push-everything'
                className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                checked={formData.pushNotifications === 'push-everything'}
                onChange={handleChange}
              />
              <label
                htmlFor='push-everything'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Everything
              </label>
            </div>

            <div className='flex items-center gap-x-3'>
              <input
                id='push-email'
                name='pushNotifications'
                type='radio'
                value='push-email'
                className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                checked={formData.pushNotifications === 'push-email'}
                onChange={handleChange}
              />
              <label
                htmlFor='push-email'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Same as email
              </label>
            </div>

            <div className='flex items-center gap-x-3'>
              <input
                id='push-nothing'
                name='pushNotifications'
                type='radio'
                value='push-nothing'
                className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                checked={formData.pushNotifications === 'push-nothing'}
                onChange={handleChange}
              />
              <label
                htmlFor='push-nothing'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                No push notifications
              </label>
            </div>
          </div>
        </fieldset>
      </div>

      <div className='mt-6 flex items-center justify-end gap-x-6'>
        <button
          type='button'
          className='text-sm font-semibold leading-6 text-gray-900'
        >
          Cancel
        </button>
        <button
          type='submit'
          className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        >
          Save
        </button>
      </div>
    </form>
  );
};
