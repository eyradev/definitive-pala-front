import { Form, useFormikContext } from "formik";
import Select from "react-select";
import {
  Button,
  FormGroup,
  FormText,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";
import { ContactRequest } from "../../../models/contactRequest";
import { Option } from "../../../util/ts-types";
import styles from "./ContactUs.module.css";

const options: Option[] = [
  {
    value: "P",
    label: "Petición",
  },
  { value: "Q", label: "Queja" },
  { value: "R", label: "Reclamo" },
  { value: "S", label: "Sugerencia" },
  { value: "D", label: "Denuncia" },
  { value: "F", label: "Felicitación" },
];

export default function ContactUsForm(): JSX.Element {
  const { values, errors, setFieldValue, handleChange, touched } =
    useFormikContext<ContactRequest>();
  return (
    <Form>
      <FormGroup>
        <label className="control-label">Tema</label>
        <Select
          name="type"
          classNamePrefix="react-select"
          className={`react-select react-select-primary ${styles.FormField}`}
          placeholder="Elije el tema de tu solicitud..."
          onChange={(option) => {
            if (option?.value && option.value === values.type) return;
            setFieldValue("type", option?.value);
          }}
          value={options.find((o) => o.value === values.type) as Option}
          options={options}
          styles={
            touched.type && errors.type
              ? {
                  singleValue: (base) => ({
                    ...base,
                    color: "red !important",
                  }),
                }
              : undefined
          }
        />
        {touched.type && errors.type && (
          <FormText className="text-muted" color="danger" id="typeErr">
            {errors.type}
          </FormText>
        )}
      </FormGroup>
      <FormGroup>
        <label
          style={{
            color: touched.name && errors.name ? "var(--danger)" : undefined,
          }}
        >
          Nombre
        </label>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="now-ui-icons users_circle-08"></i>
            </InputGroupText>
          </InputGroupAddon>
          <Input
            aria-label="Nombre..."
            autoComplete="name"
            placeholder="Nombre..."
            name="name"
            value={values.name}
            onChange={handleChange}
            style={
              touched.name && errors.name
                ? { color: "var(--danger)" }
                : undefined
            }
          />
        </InputGroup>
        {touched.name && errors.name && (
          <FormText className="text-muted" color="danger" id="nameErr">
            {errors.name}
          </FormText>
        )}
      </FormGroup>
      <FormGroup>
        <label
          style={{
            color: touched.email && errors.email ? "var(--danger)" : undefined,
          }}
        >
          Correo
        </label>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="now-ui-icons ui-1_email-85"></i>
            </InputGroupText>
          </InputGroupAddon>
          <Input
            aria-label="Correo..."
            autoComplete="email"
            placeholder="Correo..."
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            style={
              touched.email && errors.email
                ? { color: "var(--danger)" }
                : undefined
            }
          />
        </InputGroup>
        {touched.email && errors.email && (
          <FormText className="text-muted" color="danger" id="emailErr">
            {errors.email}
          </FormText>
        )}
      </FormGroup>
      <FormGroup>
        <label
          style={{
            color: touched.phone && errors.phone ? "var(--danger)" : undefined,
          }}
        >
          Telefono
        </label>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="now-ui-icons tech_mobile"></i>
            </InputGroupText>
          </InputGroupAddon>
          <Input
            autoComplete="phone"
            placeholder="Telefono..."
            type="text"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            style={
              touched.phone && errors.phone
                ? { color: "var(--danger)" }
                : undefined
            }
          />
        </InputGroup>
        {touched.phone && errors.phone && (
          <FormText className="text-muted" color="danger" id="emailErr">
            {errors.phone}
          </FormText>
        )}
      </FormGroup>
      <FormGroup>
        <label
          style={{
            color:
              touched.message && errors.message ? "var(--danger)" : undefined,
          }}
        >
          Escribe aquí tu mensaje
        </label>
        <Input
          id="message"
          name="message"
          rows="6"
          type="textarea"
          value={values.message}
          onChange={handleChange}
          style={
            touched.message && errors.message
              ? { color: "var(--danger)" }
              : undefined
          }
        />
        {touched.message && errors.message && (
          <FormText className="text-muted" color="danger" id="emailErr">
            {errors.message}
          </FormText>
        )}
      </FormGroup>
      <div className="submit text-center">
        <Button
          className={`btn-raised btn-round ${styles.boton}`}
          color="info"
          defaultValue="Contact Us"
          type="submit"
        >
          Contactanos
        </Button>
      </div>
    </Form>
  );
}
