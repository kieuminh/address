import _ from 'lodash'
import React from 'react'
import { connect } from 'react-redux'
import {
  Col as UICol,
  FormGroup as UIFormGroup,
  Label as UILabel,
} from 'reactstrap'
import {
  FormErrorControl,
  FormFieldControl,
  FormGroupControl,
} from 'lib/components'
import FormControls, {
  FormGroup,
  FormValidators,
  FormMapper,
  FormField,
} from 'lib/utilities/formControls'
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl'

const countryFieldOptions = [
  {
    label: 'Australia',
    value: 'AUSTRALIA',
  },
  {
    label: 'New Zealand',
    value: 'NEW ZEALAND',
  },
  {
    label: 'Singapore',
    value: 'SINGAPORE',
  },
]

/**
 * Renders a field's label for the editor.
 * @param {{field:AvailableField}} props
 */
const FieldLabel = (props) => {
  const name = props.field ? props.field.name : null
  const unitLabel = _.get(props.field, ['meta', 'unit', 'label']) || null

  return (
    <React.Fragment>
      {name}
      {unitLabel && <span className="badge">{unitLabel}</span>}
    </React.Fragment>
  )
}

interface IProps {
  [x: string]: any
}

interface IState {
  [x: string]: any
}

export class TransportProductAddressEditor extends React.Component<
  IProps & WrappedComponentProps,
  IState
> {
  static defaultProps = {
    onStatusChange: () => {},
  }

  formControl: FormGroup

  constructor(props) {
    super(props)
    this.state = {
      properties: [],
      shouldShowStateField: true,
    }

    this.formControl = new FormControls.Group({
      fields: {
        country: new FormControls.Field({
          type: FormControls.Field.TYPES.SELECT,
          validators: [FormValidators.required],
          options: countryFieldOptions,
          afterChange: () => {},
        }),

        company: new FormControls.Field({
          type: FormControls.Field.TYPES.STRING,
          //validators: [FormValidators.required],
        }),
        customer: new FormControls.Field({
          type: FormControls.Field.TYPES.STRING,
          //validators: [FormValidators.required],
        }),

        search: new FormControls.Field({
          type: FormControls.Field.TYPES.STRING,
          //validators: [FormValidators.required],
        }),

        street1: new FormControls.Field({
          type: FormControls.Field.TYPES.STRING,
          //validators: [FormValidators.required],
        }),

        street2: new FormControls.Field({
          type: FormControls.Field.TYPES.STRING,
          //validators: [FormValidators.required],
        }),

        suburb: new FormControls.Field({
          type: FormControls.Field.TYPES.STRING,
          //validators: [FormValidators.required],
        }),

        city: new FormControls.Field({
          type: FormControls.Field.TYPES.STRING,
          //validators: [FormValidators.required],
        }),

        postcode: new FormControls.Field({
          type: FormControls.Field.TYPES.STRING,
          //validators: [FormValidators.required],
        }),
        state: new FormControls.Field({
          type: FormControls.Field.TYPES.STRING,
          //validators: [FormValidators.required],
        }),
        email: new FormControls.Field({
          type: FormControls.Field.TYPES.STRING,
          //validators: [FormValidators.required],
        }),
        phone: new FormControls.Field({
          type: FormControls.Field.TYPES.STRING,
          //validators: [FormValidators.required],
        }),
      },
    })
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    const shouldShowStateField = this.state.shouldShowStateField

    return (
      <FormGroupControl field={this.props.field} control={this.formControl}>
        <FormErrorControl inline control={this.formControl} />
        <UIFormGroup row>
          <UILabel sm={4}>
            <FormattedMessage id="address.editor.country.label" />
          </UILabel>
          <UICol sm={8}>
            <FormFieldControl field="country" />
            <FormErrorControl field="country" />
          </UICol>
        </UIFormGroup>

        <UIFormGroup row>
          <UILabel sm={4}>
            <FormattedMessage id="address.editor.company.label" />
          </UILabel>
          <UICol sm={8}>
            <FormFieldControl field="company" />
            <FormErrorControl field="company" />
          </UICol>
        </UIFormGroup>
        <UIFormGroup row>
          <UILabel sm={4}>
            <FormattedMessage id="address.editor.customer.label" />
          </UILabel>
          <UICol sm={8}>
            <FormFieldControl field="customer" />
            <FormErrorControl field="customer" />
          </UICol>
        </UIFormGroup>

        {/* fix */}
        <UIFormGroup row>
          <UILabel sm={4}>
            <FormattedMessage id="address.editor.search.label" />
          </UILabel>
          <UICol sm={8}>
            <FormFieldControl field="search" />
            <FormErrorControl field="search" />
          </UICol>
        </UIFormGroup>

        <UIFormGroup row>
          <UILabel sm={4}>
            <FormattedMessage id="address.editor.street1.label" />
          </UILabel>
          <UICol sm={8}>
            <FormFieldControl field="street1" />
            <FormErrorControl field="street1" />
          </UICol>
        </UIFormGroup>

        <UIFormGroup row>
          <UILabel sm={4}>
            <FormattedMessage id="address.editor.street2.label" />
          </UILabel>
          <UICol sm={8}>
            <FormFieldControl field="street2" />
            <FormErrorControl field="street2" />
          </UICol>
        </UIFormGroup>

        <UIFormGroup row>
          <UILabel sm={4}>
            <FormattedMessage id="address.editor.suburb.label" />
          </UILabel>
          <UICol sm={8}>
            <FormFieldControl field="suburb" />
            <FormErrorControl field="suburb" />
          </UICol>
        </UIFormGroup>

        <UIFormGroup row>
          <UILabel sm={4}>
            <FormattedMessage id="address.editor.city.label" />
          </UILabel>
          <UICol sm={8}>
            <FormFieldControl field="city" />
            <FormErrorControl field="city" />
          </UICol>
        </UIFormGroup>

        <UIFormGroup row>
          <UILabel sm={4}>
            <FormattedMessage id="address.editor.postcode.label" />
          </UILabel>
          <UICol sm={8}>
            <FormFieldControl field="postcode" />
            <FormErrorControl field="postcode" />
          </UICol>
        </UIFormGroup>

        {shouldShowStateField && (
          <UIFormGroup row>
            <UILabel sm={4}>
              <FormattedMessage id="address.editor.state.label" />
            </UILabel>
            <UICol sm={8}>
              <FormFieldControl field="state" />
              <FormErrorControl field="state" />
            </UICol>
          </UIFormGroup>
        )}

        <UIFormGroup row>
          <UILabel sm={4}>
            <FormattedMessage id="address.editor.email.label" />
          </UILabel>
          <UICol sm={8}>
            <FormFieldControl field="email" />
            <FormErrorControl field="email" />
          </UICol>
        </UIFormGroup>

        <UIFormGroup row>
          <UILabel sm={4}>
            <FormattedMessage id="address.editor.phone.label" />
          </UILabel>
          <UICol sm={8}>
            <FormFieldControl field="phone" />
            <FormErrorControl field="phone" />
          </UICol>
        </UIFormGroup>
      </FormGroupControl>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect<{}, {}, IProps>(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { forwardRef: true }
)(injectIntl(TransportProductAddressEditor, { forwardRef: true }))
