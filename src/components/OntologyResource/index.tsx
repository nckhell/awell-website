import { ResourceTable } from "./ResourceTable";
import { ResourceProperty } from "./types";

const patientProperties: Array<ResourceProperty> = [
  {
    name: 'name',
    propertyType: 'actionable',
    description: 'A name associated with the individual.'
  },
  {
    name: 'gender',
    propertyType: 'actionable',
    description: 'Administrative Gender - the gender that the patient is considered to have for administration and record keeping purposes.'
  },
  {
    name: 'birthDate',
    propertyType: 'actionable',
    description: 'The date of birth for the individual.'
  },
  {
    name: 'language',
    propertyType: 'actionable',
    description: 'The language which can be used to communicate with the patient about his or her health.'
  }
]

export const PatientResourceTable = () => <ResourceTable properties={patientProperties} />

const observationProperties: Array<ResourceProperty> = [
  {
    name: 'code',
    propertyType: 'semantic',
    description: 'Describes what was observed. Sometimes this is called the observation "name".'
  },
  {
    name: 'value',
    propertyType: 'actionable',
    description: 'The information determined as a result of making the observation, if the information has a simple value.'
  },
  {
    name: 'effective',
    propertyType: 'actionable',
    description: 'The time or time-period the observed value is asserted as being true. For biological subjects - e.g. human patients - this is usually called the "physiologically relevant time". This is usually either the time of the procedure or of specimen collection, but very often the source of the date/time is not known, only the date/time itself.'
  },
  {
    name: 'component',
    propertyType: '',
    description: 'Some observations have multiple component observations. These component observations are expressed as separate code value pairs that share the same attributes. Examples include systolic and diastolic component observations for blood pressure measurement and multiple component observations for genetics observations.'
  },
  {
    name: 'component.code',
    propertyType: 'semantic',
    description: 'Describes what was observed. Sometimes this is called the observation "name".'
  },
  {
    name: 'component.value',
    propertyType: 'actionable',
    description: 'The information determined as a result of making the observation, if the information has a simple value.'
  }
]

export const ObservationResourceTable = () => <ResourceTable properties={observationProperties} />

const observationDefinitionProperties: Array<ResourceProperty> = [
  {
    name: 'code',
    propertyType: 'semantic',
    description: 'Describes what was observed. Sometimes this is called the observation "name".'
  },
  {
    name: 'category',
    propertyType: 'semantic',
    description: 'A code that classifies the general type of observation.'
  }
]

export const ObservationDefinitionResourceTable = () => <ResourceTable properties={observationDefinitionProperties} />

const questionnaireProperties: Array<ResourceProperty> = [
  {
    name: 'title',
    propertyType: 'semantic',
    description: 'A short, descriptive, user-friendly title for the questionnaire.'
  },
  {
    name: 'name',
    propertyType: 'semantic',
    description: 'A natural language name identifying the questionnaire. This name should be usable as an identifier for the module by machine processing applications such as code generation.'
  },
  {
    name: 'code',
    propertyType: 'semantic',
    description: 'An identifier for this question or group of questions in a particular terminology such as LOINC.'
  },
  {
    name: 'item',
    propertyType: '',
    description: 'The content of the questionnaire is constructed from an ordered, hierarchical collection of items.'
  },
  {
    name: 'item.code',
    propertyType: 'semantic',
    description: 'A terminology code that corresponds to this group or question (e.g. a code from LOINC, which defines many questions and answers).'
  },
  {
    name: 'item.text',
    propertyType: 'semantic',
    description: 'The name of a section, the text of a question or text content for a display item.'
  }
]

export const QuestionnaireResourceTable = () => <ResourceTable properties={questionnaireProperties} />

const questionnaireResponseProperties: Array<ResourceProperty> = [
  {
    name: 'authored',
    propertyType: 'actionable',
    description: 'Date the answers were gathered.'
  },
  {
    name: 'item',
    propertyType: '',
    description: 'A group or question item from the original questionnaire for which answers are provided.'
  },
  {
    name: 'item.text',
    propertyType: 'semantic',
    description: 'Text that is displayed above the contents of the group or as the text of the question being answered.'
  },
  {
    name: 'item.answer',
    propertyType: 'actionable',
    description: 'The respondent\'s answer(s) to the question.'
  }
]

export const QuestionnaireResponseResourceTable = () => <ResourceTable properties={questionnaireResponseProperties} />