import React, { CSSProperties, HTMLAttributes, MouseEvent as ReactMouseEvent, WheelEvent } from 'react';

import {
  OnSelectionChangeFunc,
  NodeTypesType,
  EdgeTypesType,
  Node,
  Edge,
  ConnectionMode,
  ConnectionLineType,
  ConnectionLineComponent,
  Viewport,
  OnConnectStart,
  OnConnectStop,
  OnConnectEnd,
  OnConnect,
  CoordinateExtent,
  KeyCode,
  PanOnScrollMode,
  OnEdgeUpdateFunc,
  NodeChange,
  EdgeChange,
  OnPaneReady,
  ProOptions,
  AttributionPosition,
  DefaultEdgeOptions,
  FitViewParams,
  BackgroundVariant,
} from '.';

export interface ReactFlowProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onPaneReady'> {
  nodes?: Node[];
  edges?: Edge[];
  defaultNodes?: Node[];
  defaultEdges?: Edge[];
  defaultEdgeOptions?: DefaultEdgeOptions;
  onNodesChange?: (nodeChanges: NodeChange[]) => void;
  onEdgesChange?: (edgeChanges: EdgeChange[]) => void;
  onNodeClick?: (event: React.MouseEvent, node: Node) => void;
  onEdgeClick?: (event: React.MouseEvent, node: Edge) => void;
  onNodeDoubleClick?: (event: ReactMouseEvent, node: Node) => void;
  onNodeMouseEnter?: (event: ReactMouseEvent, node: Node) => void;
  onNodeMouseMove?: (event: ReactMouseEvent, node: Node) => void;
  onNodeMouseLeave?: (event: ReactMouseEvent, node: Node) => void;
  onNodeContextMenu?: (event: ReactMouseEvent, node: Node) => void;
  onNodeDragStart?: (event: ReactMouseEvent, node: Node) => void;
  onNodeDrag?: (event: ReactMouseEvent, node: Node) => void;
  onNodeDragStop?: (event: ReactMouseEvent, node: Node) => void;
  onConnect?: OnConnect;
  onConnectStart?: OnConnectStart;
  onConnectStop?: OnConnectStop;
  onConnectEnd?: OnConnectEnd;
  onPaneReady?: OnPaneReady;
  onMove?: (viewport?: Viewport) => void;
  onMoveStart?: (viewport?: Viewport) => void;
  onMoveEnd?: (viewport?: Viewport) => void;
  onSelectionChange?: OnSelectionChangeFunc;
  onSelectionDragStart?: (event: ReactMouseEvent, nodes: Node[]) => void;
  onSelectionDrag?: (event: ReactMouseEvent, nodes: Node[]) => void;
  onSelectionDragStop?: (event: ReactMouseEvent, nodes: Node[]) => void;
  onSelectionContextMenu?: (event: ReactMouseEvent, nodes: Node[]) => void;
  onPaneScroll?: (event?: WheelEvent) => void;
  onPaneClick?: (event: ReactMouseEvent) => void;
  onPaneContextMenu?: (event: ReactMouseEvent) => void;
  nodeTypes?: NodeTypesType;
  edgeTypes?: EdgeTypesType;
  connectionMode?: ConnectionMode;
  connectionLineType?: ConnectionLineType;
  connectionLineStyle?: CSSProperties;
  connectionLineComponent?: ConnectionLineComponent;
  deleteKeyCode?: KeyCode;
  selectionKeyCode?: KeyCode;
  multiSelectionKeyCode?: KeyCode;
  zoomActivationKeyCode?: KeyCode;
  snapToGrid?: boolean;
  snapGrid?: [number, number];
  onlyRenderVisibleElements?: boolean;
  nodesDraggable?: boolean;
  nodesConnectable?: boolean;
  elementsSelectable?: boolean;
  selectNodesOnDrag?: boolean;
  paneMoveable?: boolean;
  minZoom?: number;
  maxZoom?: number;
  defaultZoom?: number;
  defaultPosition?: [number, number];
  translateExtent?: CoordinateExtent;
  preventScrolling?: boolean;
  nodeExtent?: CoordinateExtent;
  defaultMarkerColor?: string;
  zoomOnScroll?: boolean;
  zoomOnPinch?: boolean;
  panOnScroll?: boolean;
  panOnScrollSpeed?: number;
  panOnScrollMode?: PanOnScrollMode;
  zoomOnDoubleClick?: boolean;
  onEdgeUpdate?: OnEdgeUpdateFunc;
  onEdgeContextMenu?: (event: ReactMouseEvent, edge: Edge) => void;
  onEdgeMouseEnter?: (event: ReactMouseEvent, edge: Edge) => void;
  onEdgeMouseMove?: (event: ReactMouseEvent, edge: Edge) => void;
  onEdgeMouseLeave?: (event: ReactMouseEvent, edge: Edge) => void;
  onEdgeDoubleClick?: (event: ReactMouseEvent, edge: Edge) => void;
  onEdgeUpdateStart?: (event: ReactMouseEvent, edge: Edge) => void;
  onEdgeUpdateEnd?: (event: MouseEvent, edge: Edge) => void;
  edgeUpdaterRadius?: number;
  noDragClassName?: string;
  noWheelClassName?: string;
  noPanClassName?: string;
  fitViewOnInit?: boolean;
  connectOnClick?: boolean;
  attributionPosition?: AttributionPosition;
  pro?: ProOptions;
}

export type ReactFlowRefType = HTMLDivElement;

export type GetMiniMapNodeAttribute<NodeData = any> = (node: Node<NodeData>) => string;

export interface MiniMapProps<NodeData = any> extends HTMLAttributes<SVGSVGElement> {
  nodeColor?: string | GetMiniMapNodeAttribute<NodeData>;
  nodeStrokeColor?: string | GetMiniMapNodeAttribute<NodeData>;
  nodeClassName?: string | GetMiniMapNodeAttribute<NodeData>;
  nodeBorderRadius?: number;
  nodeStrokeWidth?: number;
  maskColor?: string;
}

export interface ControlProps extends HTMLAttributes<HTMLDivElement> {
  showZoom?: boolean;
  showFitView?: boolean;
  showInteractive?: boolean;
  fitViewParams?: FitViewParams;
  onZoomIn?: () => void;
  onZoomOut?: () => void;
  onFitView?: () => void;
  onInteractiveChange?: (interactiveStatus: boolean) => void;
}

export interface ControlButtonProps extends HTMLAttributes<HTMLButtonElement> {}

export interface BackgroundProps extends HTMLAttributes<SVGElement> {
  variant?: BackgroundVariant;
  gap?: number;
  color?: string;
  size?: number;
}