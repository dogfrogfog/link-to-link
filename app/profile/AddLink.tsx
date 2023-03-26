'use client';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { Form, Field } from 'react-final-form';
import XMarkIcon from './XMarkIcon';

export default function AddLink() {
  const router = useRouter();
  // remove state open/close logic
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);

  const toggleModal = () => setIsModalOpen((v) => !v);

  const submitForm = async (v: unknown) => {
    setIsFetching(true);
    try {
      await fetch('/api/contents/create', {
        method: 'POST',
        body: JSON.stringify(v),
      });
      startTransition(() => {
        // Refresh the current route and fetch new data from the server without
        // losing client-side browser or React state.
        router.refresh();
      });

      toggleModal();
    } catch (e) {
      console.error(e);
    } finally {
      setIsFetching(false);
    }
  };

  const isMutating = isFetching || isPending;

  return (
    <div className="flex flex-col items-center py-2">
      <div className="w-full">
        {!isModalOpen && (
          <button
            onClick={toggleModal}
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded mb-4 transition duration-300 ease-in-out hover:bg-blue-600"
          >
            Add link
          </button>
        )}
        {isModalOpen && (
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 transition duration-500 ease-in-out">
            <div className="flex flex-start mb-2">
              <span className="flex-1"></span>
              <button className="flex-none" onClick={toggleModal}>
                <XMarkIcon />
              </button>
            </div>
            {isMutating ? 'Loading' : <FormComponent onSubmit={submitForm} />}
          </div>
        )}
      </div>
    </div>
  );
}

function FormComponent({
  onSubmit,
}: {
  onSubmit: (values: unknown) => Promise<void>;
}) {
  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{}}
      render={({ handleSubmit, form, submitting, pristine }) => (
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex">
            <label
              className="flex-none mr-4 text-gray-700 text-md font-bold"
              htmlFor={'title'}
            >
              title:
            </label>
            <Field
              className="flex-1 border rounded px-3 text-gray-700 leading-tight"
              name="title"
              component="input"
              type="text"
              placeholder="Instagram of temafit"
              required
              minLength={2}
              maxLength={30}
            />
          </div>
          <div className="mb-4 flex">
            <label
              className="flex-none mr-4 text-gray-700 text-md font-bold"
              htmlFor={'url'}
            >
              Url:
            </label>
            <Field
              className="flex-1 border rounded px-3 text-gray-700 leading-tight"
              name="url"
              component="input"
              type="text"
              placeholder="https://example.com/temafit"
              required
              minLength={2}
              maxLength={30}
            />
          </div>
          <div className="buttons flex justify-between">
            <button
              className="bg-green-500 text-white font-bold p-2 rounded"
              type="submit"
              disabled={submitting || pristine}
            >
              Submit
            </button>
            <button
              className="bg-orange-500 text-white font-bold p-2 rounded"
              type="button"
              onClick={form.reset}
              disabled={submitting || pristine}
            >
              Reset
            </button>
          </div>
        </form>
      )}
    />
  );
}
