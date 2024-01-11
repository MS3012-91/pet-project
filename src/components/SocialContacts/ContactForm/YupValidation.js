import * as Yup from "yup";

export const validationSchema = (selectedIcon) => {
  return Yup.object().shape({
    name: Yup.string()
      .min(3, "Must be min 3 symbols")
      .required("Name is required"),
    email: Yup.string().when("selectedIcon", {
      is: () => selectedIcon === "email",
      then: () =>
        Yup.string().email("Invalid email").required("Email is required"),
      otherwise: () => Yup.string().nullable(),
    }),
    phone: Yup.string().when("selectedIcon", {
      is: () => ["phone", "telegram", "viber"].includes(selectedIcon),
      then: () =>
        Yup.string()
          .matches(
            /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
            "Invalid phone number. Please use international format."
          )
          .required("Phone is required"),
      otherwise: () => Yup.string().nullable(),
    }),
    message: Yup.string().required("Message is required"),
  });
};
