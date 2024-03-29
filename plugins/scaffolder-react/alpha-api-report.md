## API Report File for "@backstage/plugin-scaffolder-react"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
/// <reference types="react" />

import { ApiHolder } from '@backstage/core-plugin-api';
import { CustomFieldExtensionSchema } from '@backstage/plugin-scaffolder-react';
import { Dispatch } from 'react';
import { Extension } from '@backstage/core-plugin-api';
import { FieldExtensionComponent } from '@backstage/plugin-scaffolder-react';
import { FieldProps } from '@rjsf/utils';
import { FieldValidation } from '@rjsf/utils';
import { FormProps as FormProps_2 } from '@rjsf/core-v5';
import { IconComponent } from '@backstage/core-plugin-api';
import { JsonObject } from '@backstage/types';
import { JsonValue } from '@backstage/types';
import { LayoutOptions } from '@backstage/plugin-scaffolder-react';
import { PropsWithChildren } from 'react';
import { default as React_2 } from 'react';
import { ReactElement } from 'react';
import { ReactNode } from 'react';
import { ScaffolderStep } from '@backstage/plugin-scaffolder-react';
import { ScaffolderTaskOutput } from '@backstage/plugin-scaffolder-react';
import { SetStateAction } from 'react';
import { TaskStep } from '@backstage/plugin-scaffolder-common';
import { TemplateEntityV1beta3 } from '@backstage/plugin-scaffolder-common';
import { TemplateParameterSchema } from '@backstage/plugin-scaffolder-react';
import { UIOptionsType } from '@rjsf/utils';
import { UiSchema } from '@rjsf/utils';

// @alpha
export const createFieldValidation: () => FieldValidation;

// @alpha
export function createNextScaffolderFieldExtension<
  TReturnValue = unknown,
  TInputProps extends UIOptionsType = {},
>(
  options: NextFieldExtensionOptions<TReturnValue, TInputProps>,
): Extension<FieldExtensionComponent<TReturnValue, TInputProps>>;

// @alpha
export const DefaultTemplateOutputs: (props: {
  output?: ScaffolderTaskOutput;
}) => React_2.JSX.Element | null;

// @alpha (undocumented)
export const EmbeddableWorkflow: (props: WorkflowProps) => React_2.JSX.Element;

// @alpha
export const extractSchemaFromStep: (inputStep: JsonObject) => {
  uiSchema: UiSchema;
  schema: JsonObject;
};

// @alpha
export const Form: (
  props: PropsWithChildren<FormProps_2>,
) => React_2.JSX.Element;

// @alpha
export type FormProps = Pick<
  FormProps_2,
  'transformErrors' | 'noHtml5Validate'
>;

// @alpha
export type NextCustomFieldValidator<
  TFieldReturnValue,
  TUiOptions = unknown,
> = (
  data: TFieldReturnValue,
  field: FieldValidation,
  context: {
    apiHolder: ApiHolder;
    formData: JsonObject;
    schema: JsonObject;
    uiSchema?: NextFieldExtensionUiSchema<TFieldReturnValue, TUiOptions>;
  },
) => void | Promise<void>;

// @alpha
export interface NextFieldExtensionComponentProps<
  TFieldReturnValue,
  TUiOptions = {},
> extends PropsWithChildren<FieldProps<TFieldReturnValue>> {
  // (undocumented)
  uiSchema?: NextFieldExtensionUiSchema<TFieldReturnValue, TUiOptions>;
}

// @alpha
export type NextFieldExtensionOptions<
  TFieldReturnValue = unknown,
  TUiOptions = unknown,
> = {
  name: string;
  component: (
    props: NextFieldExtensionComponentProps<TFieldReturnValue, TUiOptions>,
  ) => JSX.Element | null;
  validation?: NextCustomFieldValidator<TFieldReturnValue, TUiOptions>;
  schema?: CustomFieldExtensionSchema;
};

// @alpha
export interface NextFieldExtensionUiSchema<TFieldReturnValue, TUiOptions>
  extends UiSchema<TFieldReturnValue> {
  // (undocumented)
  'ui:options'?: TUiOptions & UIOptionsType;
}

// @alpha
export interface ParsedTemplateSchema {
  // (undocumented)
  description?: string;
  // (undocumented)
  mergedSchema: JsonObject;
  // (undocumented)
  schema: JsonObject;
  // (undocumented)
  title: string;
  // (undocumented)
  uiSchema: UiSchema;
}

// @alpha
export const ReviewState: (props: ReviewStateProps) => React_2.JSX.Element;

// @alpha
export type ReviewStateProps = {
  schemas: ParsedTemplateSchema[];
  formState: JsonObject;
};

// @alpha
export const ScaffolderField: (
  props: PropsWithChildren<ScaffolderFieldProps>,
) => React_2.JSX.Element;

// @alpha
export interface ScaffolderFieldProps {
  // (undocumented)
  disabled?: boolean;
  // (undocumented)
  displayLabel?: boolean;
  // (undocumented)
  errors?: ReactElement;
  // (undocumented)
  help?: ReactElement;
  // (undocumented)
  rawDescription?: string;
  // (undocumented)
  rawErrors?: string[];
  // (undocumented)
  rawHelp?: string;
  // (undocumented)
  required?: boolean;
}

// @alpha (undocumented)
export function ScaffolderPageContextMenu(
  props: ScaffolderPageContextMenuProps,
): React_2.JSX.Element | null;

// @alpha (undocumented)
export type ScaffolderPageContextMenuProps = {
  onEditorClicked?: () => void;
  onActionsClicked?: () => void;
  onTasksClicked?: () => void;
};

// @alpha
export const Stepper: (stepperProps: StepperProps) => React_2.JSX.Element;

// @alpha
export type StepperProps = {
  manifest: TemplateParameterSchema;
  extensions: NextFieldExtensionOptions<any, any>[];
  templateName?: string;
  FormProps?: FormProps;
  initialState?: Record<string, JsonValue>;
  onCreate: (values: Record<string, JsonValue>) => Promise<void>;
  components?: {
    ReviewStateComponent?: (props: ReviewStateProps) => JSX.Element;
    createButtonText?: ReactNode;
    reviewButtonText?: ReactNode;
  };
  layouts?: LayoutOptions[];
};

// @alpha
export const TaskLogStream: (props: {
  logs: {
    [k: string]: string[];
  };
}) => React_2.JSX.Element;

// @alpha
export const TaskSteps: (props: TaskStepsProps) => React_2.JSX.Element;

// @alpha
export interface TaskStepsProps {
  // (undocumented)
  activeStep?: number;
  // (undocumented)
  isComplete?: boolean;
  // (undocumented)
  isError?: boolean;
  // (undocumented)
  steps: (TaskStep & ScaffolderStep)[];
}

// @alpha
export const TemplateCard: (props: TemplateCardProps) => React_2.JSX.Element;

// @alpha
export interface TemplateCardProps {
  // (undocumented)
  additionalLinks?: {
    icon: IconComponent;
    text: string;
    url: string;
  }[];
  // (undocumented)
  onSelected?: (template: TemplateEntityV1beta3) => void;
  // (undocumented)
  template: TemplateEntityV1beta3;
}

// @alpha
export const TemplateCategoryPicker: () => React_2.JSX.Element | null;

// @alpha
export const TemplateGroup: (
  props: TemplateGroupProps,
) => React_2.JSX.Element | null;

// @alpha (undocumented)
export type TemplateGroupFilter = {
  title?: React_2.ReactNode;
  filter: (entity: TemplateEntityV1beta3) => boolean;
};

// @alpha
export interface TemplateGroupProps {
  // (undocumented)
  components?: {
    CardComponent?: React_2.ComponentType<TemplateCardProps>;
  };
  // (undocumented)
  onSelected: (template: TemplateEntityV1beta3) => void;
  // (undocumented)
  templates: {
    template: TemplateEntityV1beta3;
    additionalLinks?: {
      icon: IconComponent;
      text: string;
      url: string;
    }[];
  }[];
  // (undocumented)
  title: React_2.ReactNode;
}

// @alpha (undocumented)
export const TemplateGroups: (
  props: TemplateGroupsProps,
) => React_2.JSX.Element | null;

// @alpha (undocumented)
export interface TemplateGroupsProps {
  // (undocumented)
  additionalLinksForEntity?: (template: TemplateEntityV1beta3) => {
    icon: IconComponent;
    text: string;
    url: string;
  }[];
  // (undocumented)
  groups: TemplateGroupFilter[];
  // (undocumented)
  onTemplateSelected?: (template: TemplateEntityV1beta3) => void;
  // (undocumented)
  TemplateCardComponent?: React_2.ComponentType<{
    template: TemplateEntityV1beta3;
  }>;
  // (undocumented)
  templateFilter?: (entity: TemplateEntityV1beta3) => boolean;
}

// @alpha
export const useFormDataFromQuery: (
  initialState?: Record<string, JsonValue>,
) => [Record<string, any>, Dispatch<SetStateAction<Record<string, any>>>];

// @alpha (undocumented)
export const useTemplateParameterSchema: (templateRef: string) => {
  manifest: TemplateParameterSchema | undefined;
  loading: boolean;
  error: Error | undefined;
};

// @alpha
export const useTemplateSchema: (manifest: TemplateParameterSchema) => {
  steps: ParsedTemplateSchema[];
};

// @alpha (undocumented)
export const Workflow: (workflowProps: WorkflowProps) => JSX.Element | null;

// @alpha (undocumented)
export type WorkflowProps = {
  title?: string;
  description?: string;
  namespace: string;
  templateName: string;
  onError(error: Error | undefined): JSX.Element | null;
} & Pick<
  StepperProps,
  | 'extensions'
  | 'FormProps'
  | 'components'
  | 'onCreate'
  | 'initialState'
  | 'layouts'
>;

// (No @packageDocumentation comment for this package)
```
