import { Modal, Row, Space, Spin } from "antd";
interface ModalLoadingIndicatorProps {
  open?: boolean;
}

export const ModalLoadingIndicator = ({ open }: ModalLoadingIndicatorProps) => {

  return (
    <>
      <Modal centered closable={false} open={open} footer={null}>
        <Row justify="space-around" align="middle">
          <Spin size="large" tip="Loading..." />
        </Row>
      </Modal>
    </>
  );
};
