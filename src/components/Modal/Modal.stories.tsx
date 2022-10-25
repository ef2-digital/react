import Modal from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../Button';
import { useArgs } from '@storybook/client-api';
import { Dialog } from '@headlessui/react';
import Icon from '../Icon';

export default {
    title: 'Utils/Modal',
    component: Modal
} as ComponentMeta<typeof Modal>;

export const Default: ComponentStory<typeof Modal> = ({ children, ...props }) => {
    const [{ open }, updateArgs] = useArgs();

    const toggle = () => {
        updateArgs({ open: !open });
    };

    return (
        <>
            <Button onClick={toggle}>Open modal</Button>
            <Modal {...props} onClose={toggle}>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <Icon name="done" className="fill-green-600" />
                </div>
                <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                        Payment successful
                    </Dialog.Title>
                    <div className="mt-2">
                        <p className="text-sm text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.
                        </p>
                    </div>
                </div>
                <div className="mt-5 sm:mt-6">
                    <Button onClick={toggle} className="!flex !w-full">
                        Go back to dashboard
                    </Button>
                </div>
            </Modal>
        </>
    );
};

export const Alert: ComponentStory<typeof Modal> = ({ children, ...props }) => {
    const [{ open }, updateArgs] = useArgs();

    const toggle = () => {
        updateArgs({ open: !open });
    };

    return (
        <>
            <Button onClick={toggle}>Open modal</Button>
            <Modal {...props} onClose={toggle}>
                <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <Icon name="warning" className="fill-red-600" />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                            Deactivate account
                        </Dialog.Title>
                        <div className="mt-2">
                            <p className="text-sm text-gray-500">
                                Are you sure you want to deactivate your account? All of your data will be permanently removed from our
                                servers forever. This action cannot be undone.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                    <Button className="w-full sm:ml-3 sm:w-auto sm:text-sm" onClick={toggle}>
                        Deactivate
                    </Button>
                    <Button className="w-full sm:w-auto sm:text-sm" onClick={toggle} variant="outline">
                        Cancel
                    </Button>
                </div>
            </Modal>
        </>
    );
};
