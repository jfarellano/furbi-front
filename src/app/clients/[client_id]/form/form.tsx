"use client";
import {
  Box,
  Button,
  Tab,
  Tabs,
  Typography,
  styled,
} from "@mui/material";
import { useState } from "react";
import { Checkboxes } from "@/components/Checkboxes";
import {
  clientTypes,
  clients,
  kpi,
  offering,
  organizationType,
  otherPublics,
  technics,
  touchPoints,
} from "./options";
import { TextArray } from "@/components/TextArray";
import { FullSelect } from "@/components/FullSelect";
import { DoubleTextArray } from "@/components/DoubleTextArray";
import { TrippleTextArray } from "@/components/TrippleTextArray";
import { DoubleSelectArray } from "@/components/DoubleSelectArray";
import { FullTextField } from "@/components/FullTextField";
import { FourTextArray } from "@/components/FourTextArray";
import { ActSaveForm } from "./actions";
import { validateRequired } from "@/app/helpers";

const Form = styled("form")((theme) => ({
  display: "flex",
  flexDirection: "column",
  gap: 8,
}));

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 1 }}>{children}</Box>}
    </div>
  );
}

export const ClientForm = ({ clientForm, client_id }: { clientForm: any, client_id:string}) => {
  const [formClient, setFormClient] = useState(clientForm);
  const [error, setError] = useState(false);
  const [tab, setTab] = useState(0);

  const getUsersClients = () => {
    return [
      ...(formClient.buyer || []).map((buyer: any) => buyer.client),
      ...(formClient.users || []).map((users: any) => users.client),
    ];
  };

  const handleChange = (event: any) => {
    setFormClient({
      ...formClient,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async () => {
    setError(false);
    const result = await ActSaveForm(formClient.id, formClient);

    if (result) window.location.href = `/clients/${client_id}/show`;
    else setError(true);
  };

  const handleGenerate = async () => {
    setError(false);
    const result = await ActSaveForm(formClient.id, formClient);
    // Generate file
    if (result) window.location.href = `/clients/${client_id}/show`;
    else setError(true);
  }

  const validForm = () => {
    let errors: {[key in string]: string} = {}
    const requiredMessage = 'campo requerido para generacion'

    if(!validateRequired(formClient.organizationType)) errors['organizationType'] = requiredMessage
    if(!validateRequired(formClient.clientTypes)) errors['clientTypes'] = requiredMessage
    if(!validateRequired(formClient.offer)) errors['offer'] = requiredMessage
    if(!validateRequired(formClient.organizarionAreas)) errors['organizarionAreas'] = requiredMessage
    if(!validateRequired(formClient.offering)) errors['offering'] = requiredMessage
    if(!validateRequired(formClient.target)) errors['target'] = requiredMessage
    if(!validateRequired(formClient.clients)) errors['clients'] = requiredMessage
    if((formClient.clients == "SI" || formClient.clients == "HIBRIDO") && !validateRequired(formClient.buyer)) errors['buyer'] = requiredMessage
    if((formClient.clients == "NO" || formClient.clients == "HIBRIDO") && !validateRequired(formClient.users)) errors['users'] = requiredMessage
    if(!validateRequired(formClient.solve)) errors['solve'] = requiredMessage
    if(!validateRequired(formClient.otherPublics)) errors['otherPublics'] = requiredMessage
    if(!validateRequired(formClient.publicActions)) errors['publicActions'] = requiredMessage
    if(!validateRequired(formClient.kpi)) errors['kpi'] = requiredMessage
    if(!validateRequired(formClient.marketingTechnics)) errors['marketingTechnics'] = requiredMessage
    if(!validateRequired(formClient.monitoredKpis)) errors['monitoredKpis'] = requiredMessage
    if(!validateRequired(formClient.touchPoints)) errors['touchPoints'] = requiredMessage
    if(!validateRequired(formClient.uniqueness)) errors['uniqueness'] = requiredMessage
    if(!validateRequired(formClient.recognizedCharacteristic)) errors['recognizedCharacteristic'] = requiredMessage
    
    return errors
  }

  return (
    <Form onSubmit={handleSubmit}>
      {error ? (
        <Typography color="error">Hubo un error salvando el cliente</Typography>
      ) : (
        <></>
      )}
      <Box
        sx={{
          display: "flex",
          gap: 1,
          width: '100%',
          justifyContent: 'flex-end'
        }}
      >
        <Button variant="contained" disabled={Object.keys(validForm()).length > 0 ? true : false} onClick={handleGenerate}>
          Generar
        </Button>
        <Button variant="contained" type="submit">
          Guardar
        </Button>
        <Button variant="outlined" href="/clients">
          Cancelar
        </Button>
      </Box>
      <Tabs value={tab} onChange={(event, newValue) => setTab(newValue)}>
        <Tab label="DEFINICION DE EMPRESA" tabIndex={0} />
        <Tab label="DEFINICION DE CLIENTE" tabIndex={1} />
        <Tab label="OBJETIVOS E INDICADORE" tabIndex={2} />
        <Tab label="ECOSISTEMA DIGITAL" tabIndex={3} />
        <Tab label="COMPETENCIA" tabIndex={4} />
        <Tab label="PROCESO COMERCIAL" tabIndex={5} />
        <Tab label="BRANDING Y MARCA EMPLEADORA" tabIndex={6} />
      </Tabs>
      <CustomTabPanel value={tab} index={0}>
        <FullSelect // 1
          label="¿Qué tipo de organización es?"
          name={"organizationType"}
          options={organizationType}
          value={formClient.organizationType}
          setValue={handleChange}
        />
        <Checkboxes // 1
          label="¿Qué tipo de clientes tiene laorganización?"
          name={"clientTypes"}
          options={clientTypes}
          selection={formClient.clientTypes}
          setSelection={handleChange}
        />
      </CustomTabPanel>

      <CustomTabPanel value={tab} index={1}>
        <TextArray // 2.0
          name={"offer"}
          options={formClient.offer}
          setOptions={handleChange}
          label={"Listar lo que ofrece o hace la organización en general"}
        />
        <TextArray // 2.1
          name={"organizarionAreas"}
          options={formClient.organizarionAreas}
          setOptions={handleChange}
          label={
            "¿Trabajamos para toda la organización o para un área específica? Si es un área específica, definir cuál es."
          }
        />
        <Checkboxes // 3.1
          label="¿La organizacion vende productos, servicios o ambos?"
          name={"offering"}
          options={offering}
          selection={formClient.offering}
          setSelection={handleChange}
          helpText="Hola quiero ayudarte"
        />
        <TextArray // 3.2  A qué rubro o industria pertenecen, y el tamaño de la organización y cualquier otra característica de la misma que pueda ser relevante.
          name={"target"}
          options={formClient.target}
          setOptions={handleChange}
          label={"Listar y describir el tipo de empresas a las que se dirigen."}
        />
        <FullSelect // 3.3
          label="¿Los usuarios son los mismos que los clientes?"
          name={"clients"}
          options={clients}
          value={formClient.clients}
          setValue={handleChange}
        />
        {formClient.clients &&
        (formClient.clients == "SI" || formClient.clients == "HIBRIDO") ? (
          <DoubleTextArray // 3.4
            name={"buyer"}
            fields={[
              { name: "Cliente", key: "client" },
              { name: "Descripcion", key: "description" },
            ]}
            options={formClient.buyer}
            setOptions={handleChange}
            label={"¿quiénes son los clientes?"}
          />
        ) : (
          <></>
        )}
        {formClient.clients &&
        (formClient.clients == "NO" || formClient.clients == "HIBRIDO") ? (
          <DoubleTextArray // 3.4
            name={"users"}
            fields={[
              { name: "Usuario", key: "client" },
              { name: "Descripcion", key: "description" },
            ]}
            options={formClient.users}
            setOptions={handleChange}
            label={"¿quiénes son los usuarios?"}
          />
        ) : (
          <></>
        )}

        <DoubleSelectArray //5.4
          name={"solve"}
          field={{ name: "Solucion", key: "solve" }}
          options={formClient.solve}
          setOptions={handleChange}
          label={"¿Qué problemas solucionas para tus usuarios/clientes?"}
          selection={getUsersClients()}
          selection_field={"client"}
        />
        <FullTextField // 6
          name="markets"
          value={formClient.markets}
          setValue={handleChange}
          label={"¿A qué mercados te diriges?"}
        />

        <FullTextField // 6
          name="marketSize"
          value={formClient.marketSize}
          setValue={handleChange}
          label={"¿Conoces el tamaño del mercado al que te diriges?"}
        />
        <TrippleTextArray // 9
          name={"otherPublics"}
          fields={[
            { name: "Que le ofrezco?", key: "offer" },
            { name: "Que soluciona?", key: "solve" },
          ]}
          options={formClient.otherPublics}
          setOptions={handleChange}
          label={
            "¿Hay otros públicos con los que sea relevante comunicarte además de los posibles compradores, qué problema le resuelves y qué tienes para ofrecerle?"
          }
          selection={otherPublics}
          selection_field={"client"}
        />
        <FullTextField // 10
          name="buyingPatterns"
          value={formClient.buyingPatterns}
          setValue={handleChange}
          label={
            "¿Hay patrones de compra por temporada que afectan a tus ventas?"
          }
        />
        <FullTextField // 12
          name="clientTimeExpectancy"
          value={formClient.clientTimeExpectancy}
          setValue={handleChange}
          label={"¿Cuál es el valor del tiempo de vida de uno de tus clientes?"}
        />
        <FullTextField // 13
          name="retentionCapacity"
          value={formClient.retentionCapacity}
          setValue={handleChange}
          label={
            "¿Capacidad de retención? ¿Qué estrategias usas para retener a tus clientes?"
          }
        />
        <FullTextField // 14
          name="ticketAverage"
          value={formClient.ticketAverage}
          setValue={handleChange}
          label={"¿Cuál es el ticket promedio de cada servicio?"}
        />
        <FullTextField // 15
          name="priceComparison"
          value={formClient.priceComparison}
          setValue={handleChange}
          label={"¿Cómo es tu precio respecto a la competencia?"}
        />
      </CustomTabPanel>

      <CustomTabPanel value={tab} index={2}>
        <FourTextArray // 16, 17, 18
          name={"publicActions"}
          fields={[
            { name: "Sepa", key: "know" },
            { name: "Sienta", key: "feel" },
            { name: "Haga", key: "do" },
          ]}
          options={formClient.publicActions}
          setOptions={handleChange}
          label={"¿Qué te gustaría que el público sepa, sienta y/o haga?"}
          selection={getUsersClients()}
          selection_field={"client"}
        />
        <TrippleTextArray // 19
          name={"kpi"}
          fields={[
            { name: "Plazo", key: "timeFrame" },
            { name: "KPI", key: "kpi" },
          ]}
          options={formClient.kpi}
          setOptions={handleChange}
          label={
            "¿Hay otros públicos con los que sea relevante comunicarte además de los posibles compradores, qué problema le resuelves y qué tienes para ofrecerle?"
          }
          selection={kpi}
          selection_field={"objective"}
        />

        <DoubleSelectArray // 21
          name={"marketingTechnics"}
          field={{ name: "Descripcion", key: "description" }}
          options={formClient.marketingTechnics}
          setOptions={handleChange}
          label={
            "De las siguientes técnicas de marketing, cuáles creemos que son las más adecuadas para llegar a los objetivos (esto no se le pregunta al cliente sino que lo completa el entrevistador). Esto aplica para las Actividades."
          }
          selection={technics}
          selection_field={"technics"}
        />
        <TextArray // 42
          name={"monitoredKpis"}
          options={formClient.monitoredKpis}
          setOptions={handleChange}
          label={"¿Qué métricas de marketing monitorizan en la actualidad?"}
        />
        <TextArray // 44, 45
          name={"roiStrategies"}
          options={formClient.roiStrategies}
          setOptions={handleChange}
          label={
            "¿Qué estrategias fueron las más exitosas o produjeron más ROI para tu empresa en el año anterior?"
          }
        />
      </CustomTabPanel>

      <CustomTabPanel value={tab} index={3}>
        <DoubleSelectArray // 22, 23
          name={"touchPoints"}
          field={{ name: "Descripcion", key: "description" }}
          options={formClient.touchPoints}
          setOptions={handleChange}
          label={
            "Que touch points tienes actualmente y cuales te parece importante incorporar?"
          }
          selection={touchPoints}
          selection_field={"media"}
        />
      </CustomTabPanel>

      <CustomTabPanel value={tab} index={4}>
        <DoubleTextArray // 27
          name={"opposition"}
          fields={[
            { name: "Nombre", key: "name" },
            { name: "Descripcion", key: "description" },
          ]}
          options={formClient.opposition}
          setOptions={handleChange}
          label={"¿Quién es la competencia?"}
        />
        <FullTextField // 30
          name={"oppositionMarketing"}
          value={formClient.oppositionMarketing}
          setValue={handleChange}
          label={
            "¿Qué marketing creó la competencia que desearías haber creado tú? O una campaña o acción de marketing que sea referencia para tí."
          }
        />
      </CustomTabPanel>

      <CustomTabPanel value={tab} index={5}>
        <FullTextField // 38
          name={"growthObjective"}
          value={formClient.growthObjective}
          setValue={handleChange}
          label={"¿Cuál es tu objetivo de crecimiento en ventas?"}
        />
      </CustomTabPanel>

      <CustomTabPanel value={tab} index={6}>
        <FullTextField // 48
          name={"uniqueness"}
          value={formClient.uniqueness}
          setValue={handleChange}
          label={"¿Qué hace que tu empresa sea única en el mercado?"}
        />
        <FullTextField // 49
          name={"recognizedCharacteristic"}
          value={formClient.recognizedCharacteristic}
          setValue={handleChange}
          label={
            "¿Por qué característica quieres que tu empresa sea conocida en el mercado?"
          }
        />
        <FullTextField // 50
          name={"vision"}
          value={formClient.vision}
          setValue={handleChange}
          label={
            "¿Cuál es la visión que tienes de tu empresa a 3 años? ¿Y a 10?"
          }
        />
      </CustomTabPanel>
    </Form>
  );
};
