/**
 * Bubble sample
 */

import * as React from "react";
import { MapsComponent, Inject, LayersDirective, LayerDirective, Bubble, IBubbleRenderingEventArgs, BubblesDirective, BubbleDirective, MapsTooltip, Zoom } from '@syncfusion/ej2-react-maps';
import * as data from '@/assets/bubble-datasource.json';
import * as worldMap from '@/assets/brasilmap.json';
const datasource: any = data as any;
interface Data {
    value?: number;
}
const SAMPLE_CSS = `
    .control-fluid {
		padding: 0px !important;
    }`;
const BubbleMaps = () => {
    const template: string = '<div id="bubbletooltiptemplate" style="width: 165px;background: rgba(53, 63, 76, 0.90); opacity: 90%;background: rgba(53, 63, 76, 0.90);box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.40);padding: 10px;border: 1px #abb9c6;border-radius: 4px;">' + '<div style="font-size:13px;color:#ffffff;font-weight: 500;"><center>${name}</center></div>' + '<hr style="margin-top: 2px;margin-bottom:5px;border:0.5px solid #DDDDDD">' + '<div><span style="font-size:13px;color:#cccccc">Rank : </span><span style="font-size:13px;color:#ffffff;font-weight: 500;">${rank}</span></div>' + '<div><span style="font-size:13px;color:#cccccc">Population : </span><span style="font-size:13px;color:#ffffff;font-weight: 500;">${population}</span></div></div>';
    const bubbleRendering = (args: IBubbleRenderingEventArgs): void => {
        args.radius = (args.data as Data).value;
    };
    const onMapsLoad = (): void => {
        const maps: HTMLElement | null = document.getElementById('maps');

        maps?.setAttribute('title', '');
    };
   const autismData = [
  { name: "Rondônia", value: 13 },
  { name: "Acre", value: 16 },
  { name: "Amazonas", value: 11 },
  { name: "Roraima", value: 12 },
  { name: "Pará", value: 11 },
  { name: "Amapá", value: 15 },
  { name: "Tocantins", value: 10 },

  { name: "Maranhão", value: 11 },
  { name: "Piauí", value: 12 },
  { name: "Ceará", value: 14 },
  { name: "Rio Grande do Norte", value: 11 },
  { name: "Paraíba", value: 12 },
  { name: "Pernambuco", value: 12 },
  { name: "Alagoas", value: 11 },
  { name: "Sergipe", value: 12 },
  { name: "Bahia", value: 10 },

  { name: "Minas Gerais", value: 11 },
  { name: "Espírito Santo", value: 13 },
  { name: "Rio de Janeiro", value: 13 },
  { name: "São Paulo", value: 12 },

  { name: "Paraná", value: 12 },
  { name: "Santa Catarina", value: 12 },
  { name: "Rio Grande do Sul", value: 11 },

  { name: "Mato Grosso do Sul", value: 11 },
  { name: "Mato Grosso", value: 11 },
  { name: "Goiás", value: 11 },
  { name: "Distrito Federal", value: 12 }
];

    const load = (): void => {
      
    };
    return (
        <main><div className='control-pane'>
            <style>{SAMPLE_CSS}</style>
            <div className='control-section row'>
                <div className='col-md-12'>
                    <MapsComponent id="maps" loaded={onMapsLoad} load={load} useGroupingSeparator={true} format={"n"}
                        bubbleRendering={bubbleRendering} titleSettings={{ text: 'Pessoas com TEA nas regiões do Brasil', textStyle: { size: '16px' } }}>
                        <Inject services={[Bubble, MapsTooltip, Zoom]} />
                        <LayersDirective>
                            <LayerDirective shapeData={worldMap} shapePropertyPath='name' shapeDataPath='name' dataSource={datasource} shapeSettings={{ fill: '#E5E5E5' }}>
                                <BubblesDirective>
                                    <BubbleDirective dataSource={autismData} visible={true} valuePath='value' colorValuePath='color' minRadius={3} maxRadius={70} opacity={0.8} tooltipSettings={{ visible: true, valuePath: 'population', template: template }} />
                                </BubblesDirective>
                            </LayerDirective>
                        </LayersDirective>
                    </MapsComponent>
                </div>
            </div>
        </div>
            
        </main>
    )
}
export default BubbleMaps;