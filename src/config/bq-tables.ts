import { type BQTableType } from '@/types/bq-table.types'

export const data_points: BQTableType = [
  {
    property: 'id',
    type: 'STRING',
    description: 'Unique identifier.',
  },
  {
    property: 'definition_id',
    type: 'STRING',
    description:
      'Version agnostic identifier linking to the `definition_id` column in the `data_point_definitions` table, acting as a foreign key to this table, together with `release_id`.',
  },
  {
    property: 'release_id',
    type: 'STRING',
    description:
      'An internal identifier for the published version_number of the care flow definition. Refers to the `release_id` in the `published_careflows` table, serving as a foreign key, together with `definition_id` for connecting to the proper care flow definition.',
  },
  {
    property: 'care_flow_id',
    type: 'STRING',
    description:
      'Identifier of the care flow in which the data point was collected. Refers to the `id` column in the `care_flows` table, serving as a foreign key to the `care_flows` table.',
  },
  {
    property: 'care_flow_definition_id',
    type: 'STRING',
    description:
      'Identifier of the care flow definition (designed care flow template) from which the care flow was instantiated. Refers to the `definition_id` in the `published_careflows` table, serving as a foreign key, together with `release_id` for connecting to the proper care flow definition.',
  },
  {
    property: 'activity_id',
    type: 'STRING',
    description:
      'Identifier of the activity in which the data point was collected. Refers to the `id` column in the `activities` table, acting as a foreign key to the `activities` table.',
  },
  {
    property: 'value_raw',
    type: 'STRING',
    description: 'Serialised value of the data point. Better to use type dedicated columns.',
  },
  {
    property: 'value_boolean',
    type: 'BOOLEAN',
    description: 'Typed value of the data point. This column is only populated for rows with a value type of `boolean`.',
  },
  {
    property: 'value_numeric',
    type: 'NUMERIC',
    description: 'Typed value of the data point. This column is only populated for rows with a value type of `number`.',
  },
  {
    property: 'value_date',
    type: 'TIMESTAMP',
    description: 'Typed value of the data point. This column is only populated for rows with a value type of `date`.',
  },
  {
    property: 'value_type',
    type: 'STRING',
    description:
      'Primitive type of the value before serialisation (boolean, date, number, string).',
  },
  {
    property: 'label',
    type: 'STRING',
    description: 'Descriptive label associated with the value, providing a human-readable description. Example: for value_numeric 0, the label might be "Female" or "Ocassionally". Especially useful for data points collected in a form.',
  },
  {
    property: 'value_type',
    type: 'STRING',
    description: 'Primitive type of the value before serialisation (boolean, date, number, string, numbers_array).',
  },
  {
    property: 'date',
    type: 'TIMESTAMP',
    description: 'Data point collection time (UTC Timestamp).',
  },
  {
    property: 'last_synced_at',
    type: 'TIMESTAMP',
    description: '[IRRELEVANT FOR ANALYSIS] Recorded timestamp of importing data to BigQuery.',
  },
  {
    property: 'status',
    type: 'STRING',
    description: '[IRRELEVANT FOR ANALYSIS] It will always be `created` indicating collection of a data point.',
  },
]

export const data_point_definitions: BQTableType = [
  {
    property: 'id',
    type: 'STRING',
    description: 'Unique identifier. Not to be used as foreign key when joining with other tables.',
  },
  {
    property: 'definition_id',
    type: 'STRING',
    description:
      'Version agnostic identifier of designed data point.',
  },
  {
    property: 'release_id',
    type: 'STRING',
    description:
      'An internal identifier for the published version_number of the care flow definition. Refers to the `release_id` in the `published_careflows` table.',
  },
  {
    property: 'source_definition_id',
    type: 'STRING',
    description:
      '',
  },
  {
    property: 'category',
    type: 'STRING',
    description:
      'Identifies how/where the data point is collected. Examples: `form`, `calculation`, `step`.',
  },
  {
    property: 'key',
    type: 'STRING',
    description:
      'Human readable qualified key which defines the meaning of the collected data. It is usually formed with a dot notation of category name and data point name. The naming convention may vary (e.g., snake_case, camelCase, ...). Example: Email.CompletionDate',
  },
  {
    property: 'options',
    type: 'RECORD',
    description:
      'Nested field with an array of objects, each representing a valid option with value and label. Example: "value": "1", "label": "Yes", "value": "0", "label": "No" .',
  },
  {
    property: 'value_type',
    type: 'STRING',
    description:
      'The expected primitive type for the collected data (boolean, date, number, string, numbers_array).',
  },
  {
    property: 'last_synced_at',
    type: 'TIMESTAMP',
    description:
      '[IRRELEVANT FOR ANALYSIS] Recorded timestamp of importing data to BigQuery.',
  },
]

export const care_flows: BQTableType = [
  {
    property: 'id',
    type: 'STRING',
    description: 'Unique identifier.',
  },
  {
    property: 'patient_id',
    type: 'STRING',
    description: 'Identifier of the patient enrolled in the care flow. Refers to the `id` column in the `patients` table, serving as a foreign key to the `patients` table.',
  },
  {
    property: 'definition_id',
    type: 'STRING',
    description:
      'Identifier of the care flow definition (designed care flow template) from which the care flow was instantiated. Refers to the `definition_id` in the `published_careflows` table, serving as a foreign key, together with `release_id` for connecting to the proper care flow definition.',
  },
  {
    property: 'title',
    type: 'STRING',
    description:
      'Title (Name) of the care flow definition.',
  },
  {
    property: 'release_id',
    type: 'STRING',
    description:
      'An internal identifier for the published version_number of the care flow definition. Refers to the `release_id` in the `published_careflows` table, serving as a foreign key, together with `definition_id` for connecting to the proper care flow definition.',
  },
  {
    property: 'status',
    type: 'STRING',
    description:
      'Current care flow status. Possible values: `active`, `stopped`, `completed`, `missing_baseline_info`',
  },
  {
    property: 'start_date',
    type: 'TIMESTAMP',
    description:
      'Recorded start date of the care flow (UTC). It is always available.',
  },
  {
    property: 'stop_date',
    type: 'TIMESTAMP',
    description:
      'Recorded stop date of the care flow (UTC). Populated only for stopped flows, otherwise NULL.',
  },
  {
    property: 'complete_date',
    type: 'TIMESTAMP',
    description:
      'Recorded completion date of the care flow (UTC). Populated only for completed flows, otherwise NULL.',
  },
  {
    property: 'last_synced_at',
    type: 'TIMESTAMP',
    description:
      '[IRRELEVANT FOR ANALYSIS] Recorded timestamp of importing data to BigQuery.',
  },
]

export const activities: BQTableType = [
  {
    property: 'id',
    type: 'STRING',
    description: 'Unique identifier.',
  },
  {
    property: 'care_flow_id',
    type: 'STRING',
    description: 'Identifier of the care flow associated with the activity. Refers to the `id` column in the `care_flows` table, serving as a foreign key to the `care_flows` table.',
  },
  {
    property: 'care_flow_definition_id',
    type: 'STRING',
    description: 'Identifier of the care flow definition (designed care flow template) from which the care flow was instantiated. Refers to the `definition_id` in `care_flows` and `published_careflows` tables.',
  },
  {
    property: 'status',
    type: 'STRING',
    description: 'The current (last) activity status. One of: `active`, `done`, `failed`, `canceled`, `expired`. Status `done` indicates complete resolution of the activity, such as a sent message being read or a form being fully completed. Done refers to completed activity.',
  },
  {
    property: 'date',
    type: 'TIMESTAMP',
    description: 'The date of the activity (UTC).',
  },
  {
    property: 'action',
    type: 'STRING',
    description: 'Type of the last activity occurred on the primary object. One of: `added`, `activate`, `assigned`, `scheduled`, `postponed`, `send`, `complete`, `delegated`, `generated`, `stopped`, `discarded`.',
  },
  {
    property: 'scheduled_date',
    type: 'TIMESTAMP',
    description: 'The date when the scheduled activity is set to start (UTC). Relevant only for scheduled activities.',
  },
  {
    property: 'completion_date',
    type: 'TIMESTAMP',
    description: 'Completion date of `done` activities.',
  },
  {
    property: 'action_component_name',
    type: 'STRING',
    description: 'The name of the action component holding the primary object, such as a message, form, api_call, calculation. In care flow design, this is typically referred to simply as an action.',
  },
  {
    property: 'action_definition_id',
    type: 'STRING',
    description: 'Identifier of the action component definition from which the action was instantiated.',
  },
  {
    property: 'orchestrated_instance_id',
    type: 'STRING',
    description: 'Unique identifier of the orchestrated instance (could be an action, step, or track). Can be used to merge with `actions`, `steps`, and `tracks` tables using the `id` field.',
  },
  {
    property: 'orchestrated_track_id',
    type: 'STRING',
    description: 'Unique identifier of the orchestrated track associated with the activity. Present only for objects within a track (steps, actions, etc.).',
  },
  {
    property: 'orchestrated_step_id',
    type: 'STRING',
    description: 'Unique identifier of the orchestrated step associated with the activity. Present only for objects within a step (actions, etc.).',
  },
  {
    property: 'object_name',
    type: 'STRING',
    description: 'The name of the primary object the activity is associated with. For messages, this is the subject; for forms the form name.',
  },
  {
    property: 'object_type',
    type: 'STRING',
    description: 'Type of primary object this activity relates to. Example values: action, api_call, calculation, form, message, pathway, plugin_action, reminder, step, track.',
  },
  {
    property: 'object_id',
    type: 'STRING',
    description: 'Id of the primary object.',
  },
  {
    property: 'indirect_object_type',
    type: 'STRING',
    description: 'Type of indirect/secondary object this activity relates to. Examples: `patient`, `stakeholder`, `plugin`.',
  },
  {
    property: 'indirect_object_name',
    type: 'STRING',
    description: 'The name of the related indirect/secondary object the activity relates to. It points to who should engage with or is targeted by the activity. It could be a system (for example plugin name) or a human (for example care provider name).',
  },
  {
    property: 'step_name',
    type: 'STRING',
    description: 'Name of the step the activity belongs to. [IMPORTANT NOTE] Relevant only for activities within steps. If the `object_type` is step, this value will be NULL and step name will be in `object_name` field.',
  },
  {
    property: 'track_name',
    type: 'STRING',
    description: 'Name of the track the activity belongs to. [IMPORTANT NOTE] Relevant only for activities within track. If the `object_type` is track, this value will be NULL and track name will be in `object_name` field.',
  },
  {
    property: 'track_id',
    type: 'STRING',
    description: 'Identifier of the track the activity belongs to. [IMPORTANT NOTE] Relevant only for activities within track. If the `object_type` is track, this value will be NULL.',
  },
  {
    property: 'resolution',
    type: 'STRING',
    description: 'An internal system status reflecting the outcome of executing the activity, indicating `success`, `failure` (e.g., if a plugin call fails), or `NULL` for activities yet to be resolved or not applicable.',
  },
  {
    property: 'last_synced_at',
    type: 'TIMESTAMP',
    description: '[IRRELEVANT FOR ANALYSIS] Recorded timestamp of importing data to BigQuery.',
  },
]

export const patients: BQTableType = [
  {
    property: 'id',
    type: 'STRING',
    description: 'Unique identifier.',
  },
  {
    property: 'profile_id',
    type: 'STRING',
    description: 'Unique identifier of the associated patient profile. Acts as a foreign key referring to the id property in the patient_profiles table',
  },
  {
    property: 'status',
    type: 'STRING',
    description: 'Indicates patient status within the system. Currently, `active_record` is the only available value, indicating that patient is present/not deleted.',
  },
  {
    property: 'last_synced_at',
    type: 'TIMESTAMP',
    description:
      '[IRRELEVANT FOR ANALYSIS] Recorded timestamp of importing data to BigQuery.',
  },
]

export const patient_profiles: BQTableType = [
  {
    property: 'id',
    type: 'STRING',
    description: 'Unique identifier.',
  },
  {
    property: 'name',
    type: 'STRING',
    description: 'Concatenation of the first name and last name.',
  },
  {
    property: 'first_name',
    type: 'STRING',
    description: 'First name of the patient.',
  },
  {
    property: 'last_name',
    type: 'STRING',
    description: 'Last name of the patient.',
  },
  {
    property: 'email',
    type: 'STRING',
    description: 'Email address of the patient.',
  },
  {
    property: 'birth_date',
    type: 'DATE',
    description: 'Birth date of the patient.',
  },
  {
    property: 'sex',
    type: 'STRING',
    description: 'Sex of the patient in ISO_IEC-5218 standard. One of `0` (Not known), `1` (Male), `2` (Female).',
  },
  {
    property: 'national_registry_number',
    type: 'STRING',
    description: 'National registry number of the patient.',
  },
  {
    property: 'patient_code',
    type: 'STRING',
    description: 'Arbitrary identifier associated to the patient. You can use this to facilitate the reconciliation of patient records between Awell and your domain.',
  },
  {
    property: 'phone',
    type: 'STRING',
    description: 'Phone number in the E164 format.',
  },
  {
    property: 'mobile_phone',
    type: 'STRING',
    description: 'Phone number in the E164 format.',
  },
  {
    property: 'address_street',
    type: 'STRING',
    description: '',
  },
  {
    property: 'address_city',
    type: 'STRING',
    description: '',
  },
  {
    property: 'address_zip',
    type: 'STRING',
    description: '',
  },
  {
    property: 'address_state',
    type: 'STRING',
    description: '',
  },
  {
    property: 'address_country',
    type: 'STRING',
    description: '',
  },
  {
    property: 'last_synced_at',
    type: 'TIMESTAMP',
    description:
      '[IRRELEVANT FOR ANALYSIS] Recorded timestamp of importing data to BigQuery.',
  },
  {
    property: 'status',
    type: 'STRING',
    description: 'Indicates patient status within the system. Currently, `active_record` is the only available value, indicating that patient is present/not deleted.',
  },
]

export const actions: BQTableType = [
  {
    property: 'id',
    type: 'STRING',
    description: 'Unique identifier.',
  },
  {
    property: 'name',
    type: 'STRING',
    description: 'Name of the action (action component name).',
  },
  {
    property: 'object_name',
    type: 'STRING',
    description: 'Name of the primary object associated with the action (e.g., form name).',
  },
  {
    property: 'definition_id',
    type: 'STRING',
    description: 'Identifier of the action definition (template) from which the action was instantiated.',
  },
  {
    property: 'object_definition_id',
    type: 'STRING',
    description: 'Identifier of the underlying object (message, form, ...) definition (template) from which the object was instantiated.',
  },
  {
    property: 'object_type',
    type: 'STRING',
    description: 'Type of the primary object associated with the action (e.g., `form`, `message`, `calculation`).',
  },
  {
    property: 'care_flow_definition_id',
    type: 'STRING',
    description: 'Identifier of the care flow definition associated with the action. Refers to the `definition_id` in the `care_flows` table.',
  },
  {
    property: 'care_flow_id',
    type: 'STRING',
    description: 'Identifier of the care flow in which the action exists. Refers to the `id` column in the `care_flows` table.',
  },
  {
    property: 'track_id',
    type: 'STRING',
    description: 'Identifier of the track the action belongs to. Refers to the `id` column in the `tracks` table.',
  },
  {
    property: 'step_id',
    type: 'STRING',
    description: 'Identifier of the step the action belongs to. Refers to the `id` column in the `steps` table.',
  },
  {
    property: 'started_at',
    type: 'TIMESTAMP',
    description: 'Timestamp indicating when the action was started (UTC).',
  },
  {
    property: 'completed_at',
    type: 'TIMESTAMP',
    description: 'Timestamp indicating when the action was completed (UTC). Null if the action is not completed.',
  },
  {
    property: 'duration_in_seconds',
    type: 'INTEGER',
    description: 'Duration of the action in seconds, calculated as the difference between `completed_at` and `started_at`. Zero if negative or not applicable.',
  },
  {
    property: 'scheduled_at',
    type: 'TIMESTAMP',
    description: 'The date and time when the action is scheduled to start (UTC). Relevant only for scheduled actions.',
  },
  {
    property: 'indirect_object_id',
    type: 'STRING',
    description: 'Identifier of the indirect or secondary object associated with the action.',
  },
  {
    property: 'indirect_object_type',
    type: 'STRING',
    description: 'Type of the indirect object (e.g., `patient`, `stakeholder`, `plugin`).',
  },
  {
    property: 'indirect_object_name',
    type: 'STRING',
    description: 'Name of the indirect object associated with the action.',
  },
  {
    property: 'resolution',
    type: 'STRING',
    description: 'An internal system status reflecting the outcome of executing the action, indicating `success`, `failure` (e.g., if a plugin call fails), or `NULL` for actions yet to be resolved or not applicable.',
  },
  {
    property: 'status',
    type: 'STRING',
    description: 'Current status of the action. Possible values: `active`, `done`, `canceled`, `expired`, `deleted`, or other statuses derived from actions.',
  },
  {
    property: 'last_synced_at',
    type: 'TIMESTAMP',
    description: '[IRRELEVANT FOR ANALYSIS] Recorded timestamp of importing data to BigQuery.',
  },
]

export const steps: BQTableType = [
  {
    property: 'id',
    type: 'STRING',
    description: 'Unique identifier of the step.',
  },
  {
    property: 'name',
    type: 'STRING',
    description: 'Name of the step.',
  },
  {
    property: 'definition_id',
    type: 'STRING',
    description: 'Identifier of the step definition (template) from which the step was instantiated.',
  },
  {
    property: 'care_flow_definition_id',
    type: 'STRING',
    description: 'Identifier of the care flow definition associated with the step. Refers to the `definition_id` in the `care_flows` table.',
  },
  {
    property: 'care_flow_id',
    type: 'STRING',
    description: 'Identifier of the care flow in which the step exists. Refers to the `id` column in the `care_flows` table, serving as a foreign key.',
  },
  {
    property: 'track_id',
    type: 'STRING',
    description: 'Identifier of the track the step belongs to. Refers to the `id` column in the `tracks` table.',
  },
  {
    property: 'started_at',
    type: 'TIMESTAMP',
    description: 'Timestamp indicating when the step was started (UTC).',
  },
  {
    property: 'completed_at',
    type: 'TIMESTAMP',
    description: 'Timestamp indicating when the step was completed (UTC). Null if the step is not completed.',
  },
  {
    property: 'duration_in_seconds',
    type: 'INTEGER',
    description: 'Duration of the step in seconds, calculated as the difference between `completed_at` and `started_at`. Zero if negative or not applicable.',
  },
  {
    property: 'scheduled_at',
    type: 'TIMESTAMP',
    description: 'The date and time when the step is scheduled to start (UTC). Relevant only for scheduled steps.',
  },
  {
    property: 'status',
    type: 'STRING',
    description: 'Current status of the step. Possible values: `active`, `completed`, `stopped`, `deleted`, or other statuses derived from actions.',
  },
  {
    property: 'last_synced_at',
    type: 'TIMESTAMP',
    description: '[IRRELEVANT FOR ANALYSIS] Recorded timestamp of importing data to BigQuery.',
  },
]

export const tracks: BQTableType = [
  {
    property: 'id',
    type: 'STRING',
    description: 'Unique identifier of the track.',
  },
  {
    property: 'name',
    type: 'STRING',
    description: 'Name of the track.',
  },
  {
    property: 'definition_id',
    type: 'STRING',
    description: 'Identifier of the track definition (template) from which the track was instantiated.',
  },
  {
    property: 'care_flow_definition_id',
    type: 'STRING',
    description: 'Identifier of the care flow definition associated with the track. Refers to the `definition_id` in the `care_flows` table.',
  },
  {
    property: 'care_flow_id',
    type: 'STRING',
    description: 'Identifier of the care flow in which the track exists. Refers to the `id` column in the `care_flows` table, serving as a foreign key.',
  },
  {
    property: 'started_at',
    type: 'TIMESTAMP',
    description: 'Timestamp indicating when the track was started (UTC).',
  },
  {
    property: 'completed_at',
    type: 'TIMESTAMP',
    description: 'Timestamp indicating when the track was completed (UTC). Null if the track is not completed.',
  },
  {
    property: 'duration_in_seconds',
    type: 'INTEGER',
    description: 'Duration of the track in seconds, calculated as the difference between `completed_at` and `started_at`. Zero if negative or not applicable.',
  },
  {
    property: 'scheduled_at',
    type: 'TIMESTAMP',
    description: 'The date and time when the track is scheduled to start (UTC). Relevant only for scheduled steps.',
  },
  {
    property: 'status',
    type: 'STRING',
    description: 'Current status of the track. Possible values: `active`, `completed`, `stopped`, `deleted`, or other statuses derived from actions.',
  },
  {
    property: 'last_synced_at',
    type: 'TIMESTAMP',
    description: '[IRRELEVANT FOR ANALYSIS] Recorded timestamp of importing data to BigQuery.',
  },
]
