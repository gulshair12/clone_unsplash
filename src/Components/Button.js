import React from 'react';

const buttonVariants = {
  header_buttons:
    'text-gray-600 text-sm transition duration-200 hover:text-black hover:ease-in-out focus:text-black lg:px-8 [&.active]:text-black/90 ',
    colored_button: 'text-sm bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text'
};

export default function Button({ className, buttonVariant, ...props }) {
  // Combine the provided className and the buttonVariant class
  const combinedClassName = `${className} ${buttonVariants[buttonVariant]}`;

  return <button className={combinedClassName} {...props} />;
}
