import { action } from "@storybook/addon-actions";
import { TimePickerSelectModule } from "../timepicker-select";
import { TimePickerModule } from "./";
import { LayerModule } from "../layer";
import { storiesOf, moduleMetadata } from "@storybook/angular";
import {
	withKnobs,
	boolean,
	text,
	select
} from "@storybook/addon-knobs/angular";
import { ExperimentalModule } from "../";
import { DocumentationModule } from "../documentation-component/documentation.module";

storiesOf("Components|Time Picker", module)
	.addDecorator(
		moduleMetadata({
			imports: [
				TimePickerModule,
				LayerModule,
				ExperimentalModule,
				TimePickerSelectModule,
				DocumentationModule
			]
		})
	)
	.addDecorator(withKnobs)
	.add("Simple", () => ({
		template: `
		<ibm-timepicker
			[theme]="theme"
			[invalid]="invalid"
			[invalidText]="invalidText"
			(valueChange)="timePickerChange($event)"
			[value]="value"
			[disabled]="disableTime"
			label="Select a time">
			<ibm-timepicker-select (valueChange)="timePickerSelectChange($event)" [disabled]="disabledSelect" display="inline">
				<option selected value="AM">AM</option>
				<option value="PM">PM</option>
			</ibm-timepicker-select>
			<ibm-timepicker-select (valueChange)="timePickerSelectChange($event)" [disabled]="disabledSelect" display="inline">
				<option selected value="Time Zone 1">Time Zone 1</option>
				<option value="Time Zone 2">Time Zone 2</option>
			</ibm-timepicker-select>
		</ibm-timepicker>
		`,
		props: {
			timePickerChange : action("Time picker change fired"),
			timePickerSelectChange: action("Time picker select change fired"),
			value: text("Time in 12hr format", "12:12"),
			disableTime: boolean("disabled time", false),
			disabledSelect: boolean("disabled selects", false),
			theme: select("Theme", ["dark", "light"], "dark"),
			invalid: boolean("Show form validation", false),
			invalidText: text("Form validation text", "A valid value is required")
		}
	}))
	.add("With layer", () => ({
		template: `
		<ibm-timepicker
			[invalid]="invalid"
			[invalidText]="invalidText"
			(valueChange)="timePickerChange($event)"
			[value]="value"
			[disabled]="disableTime"
			label="Select a time">
			<ibm-timepicker-select (valueChange)="timePickerSelectChange($event)" [disabled]="disabledSelect" display="inline">
				<option selected value="AM">AM</option>
				<option value="PM">PM</option>
			</ibm-timepicker-select>
			<ibm-timepicker-select (valueChange)="timePickerSelectChange($event)" [disabled]="disabledSelect" display="inline">
				<option selected value="Time Zone 1">Time Zone 1</option>
				<option value="Time Zone 2">Time Zone 2</option>
			</ibm-timepicker-select>
		</ibm-timepicker>

		<div ibmLayer>
			<ibm-timepicker
				[invalid]="invalid"
				[invalidText]="invalidText"
				(valueChange)="timePickerChange($event)"
				[value]="value"
				[disabled]="disableTime"
				label="Select a time">
				<ibm-timepicker-select (valueChange)="timePickerSelectChange($event)" [disabled]="disabledSelect" display="inline">
					<option selected value="AM">AM</option>
					<option value="PM">PM</option>
				</ibm-timepicker-select>
				<ibm-timepicker-select (valueChange)="timePickerSelectChange($event)" [disabled]="disabledSelect" display="inline">
					<option selected value="Time Zone 1">Time Zone 1</option>
					<option value="Time Zone 2">Time Zone 2</option>
				</ibm-timepicker-select>
			</ibm-timepicker>
			<div ibmLayer>
				<ibm-timepicker
					[invalid]="invalid"
					[invalidText]="invalidText"
					(valueChange)="timePickerChange($event)"
					[value]="value"
					[disabled]="disableTime"
					label="Select a time">
					<ibm-timepicker-select (valueChange)="timePickerSelectChange($event)" [disabled]="disabledSelect" display="inline">
						<option selected value="AM">AM</option>
						<option value="PM">PM</option>
					</ibm-timepicker-select>
					<ibm-timepicker-select (valueChange)="timePickerSelectChange($event)" [disabled]="disabledSelect" display="inline">
						<option selected value="Time Zone 1">Time Zone 1</option>
						<option value="Time Zone 2">Time Zone 2</option>
					</ibm-timepicker-select>
				</ibm-timepicker>
			</div>
		</div>
		`,
		props: {
			timePickerChange : action("Time picker change fired"),
			timePickerSelectChange: action("Time picker select change fired"),
			value: text("Time in 12hr format", "12:12"),
			disableTime: boolean("disabled time", false),
			disabledSelect: boolean("disabled selects", false),
			invalid: boolean("Show form validation", false),
			invalidText: text("Form validation text", "A valid value is required")
		}
	}))
	.add("With ngModel", () => ({
		template: `
		<ibm-timepicker
			(valueChange)="timePickerChange($event)"
			[(ngModel)]="model"
			[disabled]="disableTime"
			label="Select a time">
			<ibm-timepicker-select
				(valueChange)="timePickerSelectChange($event)"
				[disabled]="disabledSelect"
				display="inline"
				[(ngModel)]="period">
				<option selected value="AM">AM</option>
				<option value="PM">PM</option>
			</ibm-timepicker-select>
			<ibm-timepicker-select
				(valueChange)="timePickerSelectChange($event)"
				[disabled]="disabledSelect"
				display="inline"
				[(ngModel)]="timeZone">
				<option selected value="Time Zone 1">Time Zone 1</option>
				<option value="Time Zone 2">Time Zone 2</option>
			</ibm-timepicker-select>
		</ibm-timepicker>
		<br>
		<span> Input: {{model}} </span>
		<span> Period: {{period}} </span>
		<span> Time Zone: {{timeZone}} </span>
		`,
		props: {
			period: "AM",
			timeZone: "Time Zone 1",
			timePickerChange : action("Time picker change fired"),
			timePickerSelectChange: action("Time picker select change fired"),
			model: "12:12",
			disableTime: boolean("disabled time", false),
			disabledSelect: boolean("disabled selects", false)
		}
	}))
	.add("Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/classes/src_timepicker.timepicker.html"></ibm-documentation>
		`
	}));
